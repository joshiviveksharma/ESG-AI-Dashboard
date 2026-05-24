import React, {
  useEffect,
  useState,
} from "react";

import {
  fetchCompanies,
  fetchEmissions,
} from "../api";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import {
  BarChart,
  Bar,
 XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Dashboard({
  darkMode,
  setDarkMode,
}) {

  const [companies, setCompanies] =
    useState([]);

  const [emissions, setEmissions] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {

    try {

      const companyData =
        await fetchCompanies();

      const emissionData =
        await fetchEmissions();

      setCompanies(companyData);

      setEmissions(emissionData);

    } catch (error) {

      console.error(error);

    }
  }

  // Total Emissions

  const totalEmissions =
    emissions.reduce(
      (total, item) =>
        total +
        item.emissions_kg_co2e,
      0
    );

  // ESG Score

  const averageESG =
    emissions.length > 0
      ? Math.round(
          emissions.reduce(
            (total, item) => {

              if (
                item.emissions_kg_co2e <
                500
              )
                return total + 95;

              if (
                item.emissions_kg_co2e <
                1000
              )
                return total + 80;

              if (
                item.emissions_kg_co2e <
                2000
              )
                return total + 65;

              return total + 40;

            },
            0
          ) / emissions.length
        )
      : 0;

  // Chart Data

  const chartData = emissions.map(
    (item) => ({
      name:
        companies.find(
          (c) =>
            c.id === item.company
        )?.name || "Unknown",

      emissions:
        item.emissions_kg_co2e,
    })
  );

  // Search Filter

  const filteredCompanies =
    companies.filter((company) =>
      company.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // Chart Colors

  const COLORS = [
    "#00C49F",
    "#0088FE",
    "#FFBB28",
    "#FF8042",
  ];

  // AI Risk Indicator

  const getRiskLevel = (value) => {

    if (value < 800) {

      return {
        text: "Low Risk",
        color: "#10b981",
      };

    }

    if (value < 1500) {

      return {
        text: "Medium Risk",
        color: "#f59e0b",
      };

    }

    return {
      text: "High Risk",
      color: "#ef4444",
    };

  };

  return (

    <div
      style={{
        display: "flex",

        background: darkMode
          ? "linear-gradient(to bottom right, #0f172a, #111827, #1e293b)"
          : "linear-gradient(to bottom right, #f3f4f6, #e0f2fe)",

        color: darkMode
          ? "white"
          : "black",

        minHeight: "100vh",
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
        }}
      >

        {/* Navbar */}

        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
        />

        {/* Live Alert */}

        <div
          style={{
            background: "#ef4444",

            color: "white",

            padding: "14px",

            borderRadius: "10px",

            marginBottom: "20px",

            fontWeight: "bold",

            boxShadow:
              "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          🚨 High emission detected for
          Tata Steel — Immediate review
          recommended.
        </div>

        {/* Stat Cards */}

        <div
          style={{
            display: "flex",

            gap: "20px",

            marginBottom: "30px",

            flexWrap: "wrap",
          }}
        >

          <StatCard
            title="Companies"
            value={companies.length}
            color="#2563eb"
          />

          <StatCard
            title="Total CO2"
            value={`${totalEmissions} kg`}
            color="#059669"
          />

          <StatCard
            title="Average ESG"
            value={`${averageESG}/100`}
            color="#d97706"
          />

        </div>

        {/* ESG Score + AI Recommendation */}

        <div
          style={{
            display: "flex",

            gap: "20px",

            flexWrap: "wrap",

            marginBottom: "30px",
          }}
        >

          {/* ESG Circle */}

          <div
            style={{
              flex: 1,

              minWidth: "320px",

              background: darkMode
                ? "rgba(31,41,55,0.75)"
                : "rgba(255,255,255,0.75)",

              backdropFilter: "blur(12px)",

              padding: "25px",

              borderRadius: "20px",

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              flexDirection: "column",

              boxShadow: darkMode
                ? "0 0 25px rgba(34,197,94,0.2)"
                : "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >

            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              🌍 ESG Performance Score
            </h2>

            <div
              style={{
                width: "180px",

                height: "180px",

                borderRadius: "50%",

                background:
                  `conic-gradient(
                    #22c55e ${
                      averageESG * 3.6
                    }deg,
                    #374151 0deg
                  )`,

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                boxShadow:
                  "0 0 25px rgba(34,197,94,0.4)",
              }}
            >

              <div
                style={{
                  width: "135px",

                  height: "135px",

                  borderRadius: "50%",

                  background: darkMode
                    ? "#111827"
                    : "white",

                  display: "flex",

                  justifyContent: "center",

                  alignItems: "center",

                  flexDirection: "column",
                }}
              >

                <h1
                  style={{
                    margin: 0,

                    fontSize: "42px",

                    color: "#22c55e",
                  }}
                >
                  {averageESG}
                </h1>

                <p
                  style={{
                    margin: 0,
                  }}
                >
                  ESG Score
                </p>

              </div>

            </div>

          </div>

          {/* AI Recommendation */}

          <div
            style={{
              flex: 1,

              minWidth: "320px",

              background: darkMode
                ? "#111827"
                : "white",

              padding: "25px",

              borderRadius: "20px",

              borderLeft:
                "6px solid #22c55e",

              boxShadow:
                "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >

            <h2>
              🤖 AI Sustainability Recommendation
            </h2>

            <p
              style={{
                lineHeight: "1.8",
              }}
            >
              Tata Steel has the highest
              carbon emissions.

              Reduce business travel
              emissions by 20% to improve
              ESG score and compliance.
            </p>

            <div
              style={{
                marginTop: "20px",

                padding: "12px",

                borderRadius: "12px",

                background: darkMode
                  ? "#1f2937"
                  : "#f3f4f6",

                color: "#22c55e",

                fontWeight: "bold",
              }}
            >
              ✅ AI Prediction:
              ESG score can improve
              from 70 → 82
            </div>

          </div>

        </div>

        {/* Companies */}

        <div
          style={{
            background: darkMode
              ? "rgba(31,41,55,0.75)"
              : "rgba(255,255,255,0.75)",

            backdropFilter: "blur(12px)",

            border: darkMode
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.06)",

            padding: "20px",

            borderRadius: "16px",

            marginBottom: "30px",
          }}
        >

          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Companies
          </h2>

          {filteredCompanies.map((company) => (

            <div
              key={company.id}

              style={{
                border: darkMode
                  ? "1px solid #374151"
                  : "1px solid #ddd",

                padding: "18px",

                borderRadius: "14px",

                marginBottom: "15px",

                background: darkMode
                  ? "#111827"
                  : "#ffffff",

                transition: "0.3s",

                cursor: "pointer",
              }}

              onMouseEnter={(e) =>
                e.currentTarget.style.transform =
                  "scale(1.02)"
              }

              onMouseLeave={(e) =>
                e.currentTarget.style.transform =
                  "scale(1)"
              }
            >

              <h3
                style={{
                  marginBottom: "8px",

                  fontSize: "24px",
                }}
              >
                {company.name}
              </h3>

              <p>
                Industry:
                {" "}
                {company.industry}
              </p>

              <div
                style={{
                  marginTop: "10px",

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",
                }}
              >

                <div
                  style={{
                    width: "10px",

                    height: "10px",

                    borderRadius: "50%",

                    background: "#10b981",
                  }}
                />

                <span>
                  AI Monitoring Active
                </span>

              </div>

            </div>

          ))}

        </div>

        {/* Emissions */}

        <div
          style={{
            background: darkMode
              ? "rgba(31,41,55,0.75)"
              : "rgba(255,255,255,0.75)",

            backdropFilter: "blur(12px)",

            padding: "20px",

            borderRadius: "16px",

            marginBottom: "30px",
          }}
        >

          <h2>
            Emissions
          </h2>

          {emissions.map((emission) => {

            const risk = getRiskLevel(
              emission.emissions_kg_co2e
            );

            return (

              <div
                key={emission.id}

                style={{
                  border: darkMode
                    ? "1px solid #374151"
                    : "1px solid #ddd",

                  padding: "15px",

                  borderRadius: "14px",

                  marginBottom: "15px",

                  background: darkMode
                    ? "#111827"
                    : "#ffffff",

                  transition: "0.3s",
                }}
              >

                <p>
                  <strong>Company:</strong>{" "}

                  {
                    companies.find(
                      (c) =>
                        c.id ===
                        emission.company
                    )?.name
                  }

                </p>

                <p>
                  <strong>Scope:</strong>{" "}
                  {emission.scope}
                </p>

                <p>
                  <strong>Emissions:</strong>{" "}

                  {
                    emission.emissions_kg_co2e
                  } kg CO2e
                </p>

                <p>
                  <strong>Activity:</strong>{" "}

                  {
                    emission.activity_type
                  }
                </p>

                <p>
                  <strong>Status:</strong>{" "}

                  {
                    emission.approval_status
                  }
                </p>

                <p>
                  <strong>Source System:</strong>{" "}

                  {
                    emission.source_type
                  }
                </p>

                {/* Risk Badge */}

                <div
                  style={{
                    background:
                      risk.color,

                    color: "white",

                    padding:
                      "6px 12px",

                    borderRadius:
                      "20px",

                    width:
                      "fit-content",

                    marginTop:
                      "10px",

                    fontWeight:
                      "bold",
                  }}
                >
                  {risk.text}
                </div>

              </div>

            );

          })}

        </div>

        {/* Charts */}

        <div
          style={{
            display: "flex",

            gap: "20px",

            flexWrap: "wrap",
          }}
        >

          {/* Bar Chart */}

          <div
            style={{
              flex: 1,

              background: darkMode
                ? "rgba(31,41,55,0.75)"
                : "rgba(255,255,255,0.75)",

              backdropFilter: "blur(12px)",

              padding: "20px",

              borderRadius: "16px",

              minWidth: "400px",
            }}
          >

            <h2>
              📊 Emission Analytics
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <BarChart
                data={chartData}
              >

                <XAxis
                  dataKey="name"
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="emissions"
                  fill="#00C49F"
                  radius={[8, 8, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* Pie Chart */}

          <div
            style={{
              flex: 1,

              background: darkMode
                ? "rgba(31,41,55,0.75)"
                : "rgba(255,255,255,0.75)",

              backdropFilter: "blur(12px)",

              padding: "20px",

              borderRadius: "16px",

              minWidth: "400px",
            }}
          >

            <h2>
              🥧 ESG Distribution
            </h2>

            <ResponsiveContainer
              width="100%"
              height={300}
            >

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="emissions"
                  nameKey="name"
                  outerRadius={100}
                  label
                >

                  {chartData.map(
                    (
                      entry,
                      index
                    ) => (

                      <Cell
                        key={`cell-${index}`}
                        fill={
                          COLORS[
                            index %
                              COLORS.length
                          ]
                        }
                      />

                    )
                  )}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* AI Insights */}

        <div
          style={{
            marginTop: "30px",

            background: darkMode
              ? "rgba(31,41,55,0.75)"
              : "rgba(255,255,255,0.75)",

            backdropFilter: "blur(12px)",

            padding: "25px",

            borderRadius: "20px",
          }}
        >

          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            📈 ESG AI Insights
          </h2>

          <div
            style={{
              display: "flex",

              gap: "20px",

              flexWrap: "wrap",
            }}
          >

            {/* Card */}

            <div
              style={{
                flex: 1,

                minWidth: "250px",

                background: darkMode
                  ? "#111827"
                  : "#f9fafb",

                padding: "20px",

                borderRadius: "16px",

                borderLeft:
                  "5px solid #22c55e",
              }}
            >

              <h3>
                🌱 Lowest Emissions
              </h3>

              <p>
                Google has the most
                sustainable operations.
              </p>

            </div>

            {/* Card */}

            <div
              style={{
                flex: 1,

                minWidth: "250px",

                background: darkMode
                  ? "#111827"
                  : "#f9fafb",

                padding: "20px",

                borderRadius: "16px",

                borderLeft:
                  "5px solid #ef4444",
              }}
            >

              <h3>
                ⚠ Risk Prediction
              </h3>

              <p>
                Tata Steel may require
                compliance review.
              </p>

            </div>

            {/* Card */}

            <div
              style={{
                flex: 1,

                minWidth: "250px",

                background: darkMode
                  ? "#111827"
                  : "#f9fafb",

                padding: "20px",

                borderRadius: "16px",

                borderLeft:
                  "5px solid #3b82f6",
              }}
            >

              <h3>
                🤖 AI Recommendation
              </h3>

              <p>
                Renewable energy can
                improve ESG performance
                by 15%.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
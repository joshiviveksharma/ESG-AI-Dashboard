export async function fetchCompanies() {
  return [
    {
      id: 1,
      name: "Google",
      industry: "Technology",
    },
    {
      id: 2,
      name: "Tesla",
      industry: "Automobile",
    },
    {
      id: 3,
      name: "Tata Steel",
      industry: "Manufacturing",
    },
  ];
}

export async function fetchEmissions() {
  return [
    {
      id: 1,
      company: 1,
      scope: "Scope 1",
      emissions_kg_co2e: 450,
      activity_type: "Electricity",
      approval_status: "Approved",
      source_type: "AI Sensor",
    },
    {
      id: 2,
      company: 2,
      scope: "Scope 2",
      emissions_kg_co2e: 980,
      activity_type: "Transport",
      approval_status: "Pending",
      source_type: "ERP",
    },
    {
      id: 3,
      company: 3,
      scope: "Scope 3",
      emissions_kg_co2e: 2100,
      activity_type: "Manufacturing",
      approval_status: "Critical",
      source_type: "IoT Device",
    },
  ];
}
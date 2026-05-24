import pandas as pd

from rest_framework.views import APIView
from rest_framework.response import Response

from companies.models import Company
from emissions.models import EmissionRecord
from ingestion.models import RawRecord, DataSource


class CSVUploadView(APIView):

    def post(self, request):

        file = request.FILES["file"]

        df = pd.read_csv(file)

        for _, row in df.iterrows():

            # Find company
            company = Company.objects.get(
                name=row["company"]
            )

            # Create data source
            data_source = DataSource.objects.create(
                company=company,
                source_type=row["source_type"]
            )

            # Create raw record
            raw = RawRecord.objects.create(
                source=data_source,
                raw_json=row.to_dict(),
                ingestion_status="SUCCESS"
            )

            # Create emission record
            EmissionRecord.objects.create(
                company=company,
                scope=row["scope"],
                activity_type=row["activity_type"],
                amount=row["emissions_kg_co2e"],
                normalized_unit="kg",
                emissions_kg_co2e=row["emissions_kg_co2e"],
                approval_status=row["approval_status"],
                source_record=raw,
            )

        return Response(
            {
                "message": "CSV uploaded successfully"
            }
        )
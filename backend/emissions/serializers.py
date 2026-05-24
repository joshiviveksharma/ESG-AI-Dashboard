from rest_framework import serializers
from .models import EmissionRecord


class EmissionRecordSerializer(serializers.ModelSerializer):

    source_type = serializers.CharField(
        source="source_record.source.source_type",
        read_only=True
    )

    class Meta:
        model = EmissionRecord

        fields = [
            "id",
            "company",
            "scope",
            "activity_type",
            "amount",
            "normalized_unit",
            "emissions_kg_co2e",
            "approval_status",
            "source_record",
            "source_type",
        ]
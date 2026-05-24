from django.db import models
from companies.models import Company
from ingestion.models import RawRecord

class EmissionRecord(models.Model):

    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    scope = models.CharField(max_length=20)

    activity_type = models.CharField(max_length=100)

    amount = models.FloatField()

    normalized_unit = models.CharField(max_length=20)

    emissions_kg_co2e = models.FloatField()

    suspicious_flag = models.BooleanField(default=False)

    approval_status = models.CharField(max_length=20, default='PENDING')

    source_record = models.ForeignKey(RawRecord, on_delete=models.CASCADE)

    approved_at = models.DateTimeField(null=True, blank=True)
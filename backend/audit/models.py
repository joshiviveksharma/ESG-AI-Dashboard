from django.db import models
from emissions.models import EmissionRecord

class AuditLog(models.Model):

    record = models.ForeignKey(EmissionRecord, on_delete=models.CASCADE)

    old_value = models.JSONField()

    new_value = models.JSONField()

    changed_at = models.DateTimeField(auto_now_add=True)
# Generated by Django 4.2.5 on 2023-10-24 18:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("chat", "0006_alter_version_parent_version"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="conversation",
            options={},
        ),
        migrations.AlterField(
            model_name="conversation",
            name="deleted_at",
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]

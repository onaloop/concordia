# Generated by Django 2.0.8 on 2018-09-12 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('importer', '0005_auto_20180816_1702'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaignitemassetcount',
            name='campaign_item_identifier',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='campaigntaskdetails',
            name='campaign_name',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='campaigntaskdetails',
            name='campaign_slug',
            field=models.SlugField(max_length=500),
        ),
        migrations.AlterField(
            model_name='campaigntaskdetails',
            name='project_name',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='campaigntaskdetails',
            name='project_slug',
            field=models.SlugField(max_length=500),
        ),
    ]

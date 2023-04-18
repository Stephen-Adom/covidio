/* eslint-disable react/require-default-props */
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router';

const Countries = ({ countries }) => {
  const { continent } = useParams();
  const columns = [
    { field: 'Country', header: 'Country' },
    { field: 'TotalCases', header: 'Total Cases' },
    { field: 'NewCases', header: 'New Cases' },
    { field: 'Critical', header: 'Critical' },
    { field: 'ActiveCases', header: 'Active Cases' },
    { field: 'TotalDeaths', header: 'Total Deaths' },
  ];

  const specific = countries.map((country) => ({
    Country: country.country,
    TotalCases: country.cases,
    NewCases: country.todayCases,
    Critical: country.critical,
    ActiveCases: country.active,
    TotalDeaths: country.deaths,
  }));

  const dynamicCols = columns.map((col) => (
    <Column key={col.field} field={col.field} header={col.header} sortable />
  ));

  return (
    <section className="p-2">
      <div className="mb-5">
        <div className=" px-2">
          {specific && (
            <DataTable
              value={specific}
              responsiveLayout="scroll"
              header={continent ? `Countries in ${continent}` : 'All Countries'}
              showGridlines
              className="data-table shadow shadow-slate-500"
            >
              {dynamicCols}
            </DataTable>
          )}
        </div>
      </div>
    </section>
  );
};

Countries.propTypes = {
  countries: PropTypes.shape([]),
};

export default Countries;

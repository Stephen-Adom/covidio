import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Countries = ({ type }) => {
  const countries = useSelector((state) => state.metrics.countries);
  const continents = useSelector((state) => state.metrics.allContinents);
  const [specific, setSpecific] = useState([]);

  const navigate = useNavigate();
  const columns = [
    { field: type === 'country' ? 'Country' : 'Continent', header: type === 'country' ? 'Country' : 'Continent' },
    { field: 'TotalCases', header: 'Total Cases' },
    { field: 'NewCases', header: 'New Cases' },
    { field: 'Critical', header: 'Critical' },
    { field: 'ActiveCases', header: 'Active Cases' },
    { field: 'TotalDeaths', header: 'Total Deaths' },
  ];

  useEffect(() => {
    if (type === 'country') {
      const mappedData = countries.map((country) => ({
        Country: country.country,
        TotalCases: country.cases.toLocaleString(),
        NewCases: country.todayCases.toLocaleString(),
        Critical: country.critical.toLocaleString(),
        ActiveCases: country.active.toLocaleString(),
        TotalDeaths: country.deaths.toLocaleString(),
      }));

      setSpecific(mappedData);
    } else {
      const mappedData = continents.map((continent) => ({
        Continent: continent.continent,
        TotalCases: continent.cases.toLocaleString(),
        NewCases: continent.todayCases.toLocaleString(),
        Critical: continent.critical.toLocaleString(),
        ActiveCases: continent.active.toLocaleString(),
        TotalDeaths: continent.deaths.toLocaleString(),
      }));

      setSpecific(mappedData);
    }
  }, [continents, countries, type]);

  const dynamicCols = columns.map((col) => (
    <Column key={col.field} field={col.field} header={col.header} sortable />
  ));

  const viewContinentDetails = (continent) => {
    if (type === 'continent') {
      navigate(`/continents/${continent.Continent}`);
    }
  };

  return (
    <section className="p-2">
      <div className="mb-5">
        <div className="px-2 ">
          {specific && (
            <DataTable
              value={specific}
              responsiveLayout="scroll"
              header={type === 'country' ? 'All Countries' : 'All Continents'}
              showGridlines
              className="shadow data-table shadow-slate-500"
              paginator
              rows={5}
              rowsPerPageOptions={[5, 10, 25, 50]}
              selectionMode="single"
              onSelectionChange={(e) => viewContinentDetails(e.value)}
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
  type: PropTypes.string.isRequired,
};

export default Countries;

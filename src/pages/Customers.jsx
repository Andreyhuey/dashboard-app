import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Toolbar,
  Search,
  Delete,
  Edit,
  Sort,
  Filter,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy.js";

import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-20 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridComp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, Page, Toolbar, Selection, Sort, Edit, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;

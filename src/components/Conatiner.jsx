import React, { useState, useMemo } from "react";
import Header from "./Header";
import FilterList from "./FilterList";
import DataTable from "react-data-table-component";

function Conatiner() {
  //  State for the table's filter value (search) and reset function
  const [showPopModal, setShowModal] = useState(false);

  // table  ditector state
  const [titleDitector, setTitleDitectTor] = useState(false);
  const [authorDitector, setAuthorDitector] = useState(false);
  const [categorieDitector, setCategorieDitector] = useState(false);
  const [priceDitector, setPriceDitector] = useState(false);
  const [statusDitector, setStatusDitector] = useState(false);
  const [dateDitector, setDateDitector] = useState(false);
  const [actionDitector, setActionDitector] = useState(false);

  // table colums data

  const columns = useMemo(
    () => [
      {
        id: 1,
        name: "Title",
        selector: (row) => row.title,
        omit: titleDitector,
      },
      {
        id: 2,
        name: "Author",
        selector: (row) => row.author,
        omit: authorDitector,
      },
      {
        id: 3,
        name: "Categories",
        selector: (row) => row.categories,
        omit: categorieDitector,
      },
      {
        id: 4,
        name: "Price",
        selector: (row) => row.price,
        omit: priceDitector,
      },
      {
        id: 5,
        name: "Status",
        selector: (row) => row.status,
        omit: statusDitector,
      },
      {
        id: 6,
        name: "Date",
        selector: (row) => row.date,
        omit: dateDitector,
      },
      {
        id: 7,
        name: "Action",
        selector: (row) => row.action,
        omit: actionDitector,
      },
    ],
    [
      titleDitector,
      authorDitector,
      categorieDitector,
      priceDitector,
      statusDitector,
      dateDitector,
      actionDitector,
    ]
  );

  // table row data
  const rowData = useMemo(
    () => [
      {
        id: 1,
        title: "React JS",
        date: "May 29, 2013",
        author: "Meta",
        categories: "Library",
        status: "Published",
        price: 500,
        action: "Delete",
      },
      {
        id: 2,
        title: "Next JS",
        date: "October 25, 2016",
        author: "Guillermo Rauch",
        categories: "Framework",
        status: "Published",
        price: 1000,
        action: "Delete",
      },
      {
        id: 3,
        title: "Node JS",
        date: "May 27, 2009",
        author: "Ryan Dahl",
        categories: "Runtime",
        status: "Published",
        price: 2000,
        action: "Delete",
      },
    ],
    []
  );

  // open filter modal handler
  const modalHandler = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="p-5 bg-white shadow-2xl w-full lg:w-[70%] mx-auto rounded-lg">
        {/* Header Section */}
        <Header modalHandler={modalHandler} showPopModal={showPopModal} />
        {/* Data Table  Section */}
        <DataTable columns={columns} data={rowData} />
      </div>
      {/* Filter Modal */}
      {showPopModal && (
        <FilterList
          modalHandler={modalHandler}
          setTitleDitectTor={setTitleDitectTor}
          setAuthorDitector={setAuthorDitector}
          setCategorieDitector={setCategorieDitector}
          setPriceDitector={setPriceDitector}
          setStatusDitector={setStatusDitector}
          setDateDitector={setDateDitector}
          setActionDitector={setActionDitector}
        />
      )}
    </>
  );
}

export default Conatiner;

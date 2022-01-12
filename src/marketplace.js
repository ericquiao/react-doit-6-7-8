import React from 'react';

const ProdImg = ({imgsrc}) => {
  return(
    <img
      src={imgsrc}
      alt=""
      className="
        object-cover
        pointer-events-none
        group-hover:opacity-75
        h-48
        w-full"
    />
  )
}

const Button = (props) => {
  return (
    <button
      type="button"
        className="inline-flex justify-center items-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        onClick={props.onClick}
    >
      {props.children}

    </button>
  );
};

const EditButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
    >
      <svg
        className="h-4 w-4 mr-1.5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
      </svg>
      EDIT
    </Button>
  );
};

const DeleteButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
    >
      <svg
        className="w-4 h-4 mr-1.5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
          clipRule="evenodd"></path>
      </svg>
      DELETE
    </Button>
  );
};

export const MarketPlace = ({
  imgsrc,
  prodcrncy,
  prodprice,
  prodinv,
  prodname,
  prodtag,
  singleitem,
  onEdit,
  onDelete
}) => {
  return (
    <div className="relative flex flex-col">
      <div className=" group block w-full rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden">

        <ProdImg imgsrc ={imgsrc} />
        

        {/* <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for Nike Air 2021</span>
        </button> */}

      </div>

      <div className=" flex-1 flex md:flex-col justify-between items-start md:items-stretch gap-3 px-2">
        <div className="mt-1 flex-1">
          <div className="flex justify-between items-center gap-3">
            <div>
              {prodcrncy} <span className="text-2xl font-bold"> {prodprice}</span>
            </div>

            {singleitem ? (
              <span className=" inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Only One
              </span>
            ) : (
              <div className="text-sm text-gray-500">
                {prodinv} pieces available
              </div>
            )}
          </div>

          <p className=" block text-sm font-medium    text-gray-900 truncate pointer-events-none">
            {prodname}
          </p>

          <p className=" block text-sm font-medium text-gray-500 pointer-events-none">
            {prodtag}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 py-3">
          <EditButton onClick={() => onEdit()} />
          <DeleteButton onClick={() => onDelete()} />
        </div>
      </div>
    </div>
  );
};
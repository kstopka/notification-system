import URL_PATHS from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export const useDefaultColumns = () => {
  const navigate = useNavigate();
  return {
    columns: [
      {
        // Header: () => {
        //   return <div className="TableHeader">Nazwa</div>;
        // },
        Header: "ID",
        id: "law_id",
        accessor: "law_id",
        name: "law_id",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        Header: "Nazwa",
        accessor: "name",
        name: "name",
        Cell: (e: { value: string }) => `${e.value}`,
        // tickets.find(({ idMaterial }) => idMaterial === Number(e.value))
        //     ?.nameMaterial,
      },
      {
        Header: "Status",
        accessor: "status",
        name: "status",
        Cell: (e: { value: string }) => `${e.value}`,
      },
      {
        accessor: "law_id",
        id: "openLaw",
        Cell: (e: { value: string }) => (
          <button
            onClick={() => navigate(`${URL_PATHS.law.slug}?id=${e.value}`)}
          >
            otwórz
          </button>
        ),
      },
    ],
  };
};

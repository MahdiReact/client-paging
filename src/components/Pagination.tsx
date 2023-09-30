import { times } from "lodash";

interface Props {
	pages: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	activePage: number;
}

const Pagination: React.FC<Props>  = ({ pages, setPage, activePage })  => {

   const prevPage: () => void = () => {
      setPage((oldPage) => {
         let prevPage = oldPage - 1;
         if(prevPage < 1) {
            prevPage= pages;
         }
         return prevPage;
      })
   }
   const nextPage: () => void = () => {
      setPage((oldPage) => {
         let nextpage = oldPage + 1;
         if(nextpage > pages) {
            nextpage= 1;
         }
         return nextpage;
      })
   }

	return (
		<ul className="pagination d-flex justify-content-center mt-5" dir="rtl">
			<li className="page-item" onClick={prevPage}>
				<a href="#" className="page-link">
					قبلی
				</a>
			</li>
			{times(pages, (index) => {
				return (
					<li
						key={`pagination-${index}`}
						className={`page-item ${index + 1 === activePage ? "active" : ""}`}
						onClick={() => setPage(index + 1)}
					>
						<a href="#" className="page-link">
							{index + 1}
						</a>
					</li>
				);
			})}
			<li className="page-item" onClick={nextPage}>
				<a href="#" className="page-link">
					بعدی
				</a>
			</li>
		</ul>
	);
};

export default Pagination;

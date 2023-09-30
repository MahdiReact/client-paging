import { useState, useEffect } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import { Programmer } from "./model";
import usePaginatedFetch from "./usePaginatedFetch";

const baseUrl = "https://react-mini-projects-api.classbon.com/Programmer";

function App () {
	const [loading, data] = usePaginatedFetch(baseUrl + "/programmers", 3);
	const [page, setPage] = useState<number>(1);
	const [programmers, setProgrammers] = useState<Programmer[]>([]);

	useEffect(() => {
		if (loading) return;
		setProgrammers(data[page - 1]);
	}, [loading, page]);

	return (
		<>
			<div className="container mt-5">
			{loading && 
				(
					<div className="d-flex justify-content-center">
						<div className="spinner-border"></div>
					</div>
				)
			}
			{	
			!loading && 
			(
				<div className="row d-flex justify-content-center">
					{programmers.map(({id , ...programmer}) =>{
						return (
						<div className="col-3" key={id}>
							<Card id={id} {...programmer} />
						</div>
						)
					})}
				</div>
			)		
			}
		</div>
		<div className="row">
			<Pagination pages={data.length} setPage={setPage} activePage={page}/>
		</div>
		</>
	);
}

export default App;

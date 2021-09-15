import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
};

const Pagination = ({ page, onPageChange }: Props) => {

    //const numbers = Array.from(Array(10).keys());

    let numbers: number[] = [];
    if (page.number > 1 && page.number < page.totalPages - 2)
        numbers = [page.number - 1, page.number, page.number + 1];
    else if (page.number < 2)
        numbers = [0, 1, 2];
    else if (page.number > page.totalPages - 3)
        numbers = [page.totalPages - 3, page.totalPages - 2, page.totalPages - 1]

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(0)}>{"<<"}</button>
                    </li>
                    <li className={`page-item ${page.first ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>{"<"}</button>
                    </li>
                    {
                        numbers.map((value, index) => (
                            < li className={`page-item ${page.number === value ? "disabled" : ""}`} key={index} >
                                <button className="page-link" onClick={() => onPageChange(value)}>{value + 1}</button>
                            </li>
                        ))
                    }
                    <li className={`page-item ${page.last ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>{">"}</button>
                    </li>
                    <li className={`page-item ${page.last ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(page.totalPages - 1)}>{">>"}</button>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default Pagination;
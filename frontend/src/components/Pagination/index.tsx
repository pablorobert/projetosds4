import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
};

const Pagination = ({ page, onPageChange }: Props) => {

    const numbers = Array.from(Array(page.totalPages).keys());

    return (
        <div className="d-flex justify-content-center">
            <nav>
                <ul className="pagination">
                    <li className={`page-item ${page.first ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>&lt;</button>
                    </li>
                    {
                        numbers.map((value, index) => (
                            < li className={`page-item ${page.number === value ? "disabled" : ""}`} key={index} >
                                <button className="page-link" onClick={() => onPageChange(value)}>{value + 1}</button>
                            </li>
                        ))
                    }
                    <li className={`page-item ${page.last ? "disabled" : ""}`}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>&gt;</button>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default Pagination;
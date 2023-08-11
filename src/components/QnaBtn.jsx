import "./qna_btn.css";  // eslint-disable-next-line

function QnaBtn({children}) {
    return (
        <button className="qna_button">
            {children}
        </button>
    );
}

export default QnaBtn;
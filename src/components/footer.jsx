const MyFooter = () => {
    const year = new Date().getFullYear();

    return (
        <div className="my-footer">
            <p>Copyright ©{year}</p>
        </div>
    );
};

export default MyFooter;

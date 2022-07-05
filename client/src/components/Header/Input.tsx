export const Input = () => {
    const minLength = 4;
    return (
        <div className="header__wrapper">
            <form>
                <input
                    placeholder="Search for brand, product, category..."
                    type="text"
                    minLength={minLength}
                    maxLength={40}
                    className="header__input"
                    disabled={minLength < 4}
                />
                <button className="header__button">
                    <i className="fa fa-search" />
                </button>
            </form>
        </div>
    );
};

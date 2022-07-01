import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCard = () => {
    return (
        <div className="skeleton__grid">
            <div className="card__wrapper">
                <div className="card__image">
                    <Skeleton width={120} height={140} />
                </div>
                <div className="card__content"></div>
                <p className="card__title">
                    <Skeleton width={120} height={13} />
                </p>
                <span className="card__price">
                    <Skeleton width={60} height={10} />
                </span>
            </div>
        </div>
    );
};

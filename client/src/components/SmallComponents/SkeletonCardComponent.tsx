import { SkeletonCard } from "./SkeletonCard";
import "./ProductComponent.scss";

export const SkeletonCardComponent = () => {
    return (
        <div className="products__wrapper">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    );
};

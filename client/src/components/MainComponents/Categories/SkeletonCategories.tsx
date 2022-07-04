import React from "react";
import ContentLoader from "react-content-loader";

export const SkeletonCategories = () => {
    return (
        <ContentLoader
            speed={2}
            width={200}
            height={50}
            viewBox="0 0 100 40"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100" height="20" />
        </ContentLoader>
    );
};

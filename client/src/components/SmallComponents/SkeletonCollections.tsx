import ContentLoader from "react-content-loader";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonCollections = () => {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect
                x="0"
                y="15"
                rx="3"
                ry="3"
                width="200"
                height="150"
            />
        </ContentLoader>
    );
};

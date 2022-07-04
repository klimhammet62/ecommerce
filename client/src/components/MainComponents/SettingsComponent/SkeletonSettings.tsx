import ContentLoader from "react-content-loader";

export const SkeletonSettings = () => {
    return (
        <ContentLoader
            speed={2}
            width={300}
            height={20}
            viewBox="0 0 80 10"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="100" height="20" />
        </ContentLoader>
    );
};

import { BonusComponent } from "./BonusComponent";
import { NewCollection } from "./NewCollection";
import { SkeletonCollections } from "../SmallComponents/SkeletonCollections";
import { RootStore } from "../../store/store";
import { observer } from "mobx-react-lite";

export const SidePanel: React.FC = observer(() => {
    return (
        <>
            <BonusComponent />
            {RootStore.products.isLoading ? (
                <>
                    <SkeletonCollections />
                    <SkeletonCollections />
                    <SkeletonCollections />
                </>
            ) : (
                RootStore.products.new_collection.map((obj) => (
                    <NewCollection
                        id={obj.id}
                        key={obj.id}
                        image={obj.image}
                        title={obj.title}
                        alt={obj.alt}
                    />
                ))
            )}
        </>
    );
});

import { cn } from "@/lib/utils";
import Categories from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";


interface Props {
    className?: string;
}

export const TopBar = ({ className }: Props) => {
    return (
        <div className={cn("sticky top-0 bg-white p-5 shadow-lg shadow-black/5 z-10 rounded-sm", className)}>
            <Container className="flex items-center justify-between">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};

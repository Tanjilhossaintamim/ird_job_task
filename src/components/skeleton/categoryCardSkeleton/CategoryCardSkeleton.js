import { Avatar, Skeleton } from "@mui/material";

const CategoryCardSkeleton = () => {
  return (
    <div className="w-full flex items-center space-x-5 mb-3">
      <div>
        <Skeleton animation="wave" className="bg-color-skeleton w-14 h-20" />
      </div>
      <div>
      <Skeleton animation="wave" className="bg-color-skeleton w-48 " />
      <Skeleton animation="wave" className="bg-color-skeleton w-32" />
      </div>
    </div>
  );
};

export default CategoryCardSkeleton;

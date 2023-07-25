import SkeletonComponent from "./SkeletonComponent";

export default function SkeletonCard() {
  return (
    <div className="card">
      <figure className="card-image-area">
        <SkeletonComponent type="image" />
      </figure>
      <div className="card-info-area">
        <SkeletonComponent type="title" />
        <SkeletonComponent type="price" />
      </div>
    </div>
  );
}

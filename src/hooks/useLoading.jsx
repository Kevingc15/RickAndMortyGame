import loadingImage from '../assets/portalLoading.gif';

export const UseLoading = () => {
  return (
    <div className="loading-container">
      <img className="loading-icon" src={loadingImage} alt="Rick and Morty loading icon" />
      <p>Loading...</p>
    </div>
  );
};
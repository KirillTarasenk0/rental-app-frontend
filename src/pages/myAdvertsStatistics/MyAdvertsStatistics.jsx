import './MyAdvertsStatistics.scss';
import { useGetAdvertsStatisticsQuery } from "../../slices/advertsStatisticsApi";

export const MyAdvertsStatistics = () => {
    const { data, error, isLoading } = useGetAdvertsStatisticsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        console.error('Error fetching statistics:', error);
        return <div>Error fetching statistics: {error.message}</div>;
    }

    if (!data || !data.statistics) {
        return <div>No statistics available</div>;
    }

    return (
        <div className="my-adverts-statistics__container">
            <h1 className="my-adverts-statistics__header">
                My adverts statistics
            </h1>
            {data.statistics.map((stat) => (
                <div className="my-adverts-statistics__item" key={stat.id}>
                    <h2 className="my-adverts-statistics__item-title">
                        {stat.title}
                    </h2>
                    <p className="my-adverts-statistics__item-rating">
                        Average Rating: {parseFloat(stat.average_rating).toFixed(2)}
                    </p>
                    <p className="my-adverts-statistics__item-rating">
                        Average Cleanliness: {parseFloat(stat.average_cleanliness).toFixed(2)}
                    </p>
                    <p className="my-adverts-statistics__item-rating">
                        Average Amenities: {parseFloat(stat.average_amenities).toFixed(2)}
                    </p>
                    <p className="my-adverts-statistics__item-rating">
                        Average Location: {parseFloat(stat.average_location).toFixed(2)}
                    </p>
                    <p className="my-adverts-statistics__item-review-count">
                        Review Count: {stat.review_count}
                    </p>
                </div>
            ))}
        </div>
    );
};

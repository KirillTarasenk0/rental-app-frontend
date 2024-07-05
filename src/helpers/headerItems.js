import { BankOutlined, HomeOutlined, SettingOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const getHeaderItems = (isLoggedIn, userStatus) => {
    const headerItems = [
        {
            label: <Link to="/houses">Дома</Link>,
            key: 'houses',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/flats">Квартиры</Link>,
            key: 'flats',
            icon: <BankOutlined />,
        },
        {
            label: <Link to="/commercial">Коммерческая</Link>,
            key: 'commercial',
            icon: <ShopOutlined />,
        },
        {
            label: 'Настройки',
            key: 'settings',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'Профиль',
                    children: [
                        {
                            label: <Link to="/settings/viewProfile">Просмотреть</Link>,
                            key: 'setting:1',
                        },
                        {
                            label: <Link to="/settings/editProfile">Редактировать</Link>,
                            key: 'setting:2',
                        },
                        isLoggedIn && userStatus && userStatus.role === 'renter' ? {
                            label: <Link to="settings/myAdverts">Мои объявления</Link>,
                            key: 'myAds',
                        } : null,
                        isLoggedIn ? {
                            label: <Link to="settings/favouriteProperties">Избранные объявления</Link>,
                            key: 'favouriteAdds',
                        } : null,
                        isLoggedIn ? {
                            label: <Link to="settings/bookedProperties">Мои бронирования</Link>,
                            key: 'bookedProperties',
                        } : null,
                        isLoggedIn && userStatus && userStatus.role === 'renter' ? {
                            label: <Link to="settings/myAdvertsStatistics">Статистика моих объявлений</Link>,
                            key: 'myAdsStatistics',
                        } : null,
                    ],
                },
            ],
        },
    ];

    return headerItems;
};

export default getHeaderItems;

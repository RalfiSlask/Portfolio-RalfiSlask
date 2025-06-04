import SanityLogo from '../../../assets/icons/cms/sanity.png';
import ShopifyLogo from '../../../assets/icons/cms/shopify.png';
import WooCommerceLogo from '../../../assets/icons/cms/woocommerce.png';
import WordpressLogo from '../../../assets/icons/cms/wordpress.png';

const CMS = () => {
  const cmsIcons = [
    {
      name: 'Wordpress',
      logo: WordpressLogo,
      className: 'absolute left-[0] top-10 translate-x-1/2 skills-icon-container',
    },
    {
      name: 'WooCommerce',
      logo: WooCommerceLogo,
      className: 'absolute right-0 top-10 -translate-x-1/2 skills-icon-container',
    },
    {
      name: 'Shopify',
      logo: ShopifyLogo,
      className: 'absolute right-0 bottom-10 -translate-x-1/2 skills-icon-container rounded-full',
    },
    {
      name: 'Sanity',
      logo: SanityLogo,
      className: 'absolute left-0 bottom-10 translate-x-1/2 skills-icon-container',
    },
  ];

  return (
    <>
      {cmsIcons.map(icon => (
        <div key={icon.name} className={icon.className + ' group flex flex-col items-center z-50'}>
          <img src={icon.logo} alt={icon.name + ' logo'} width="30" height="30" loading="lazy" />
          <span
            className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-200 bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2 shadow-lg z-10 whitespace-nowrap"
            style={{ position: 'absolute', top: '-2.2rem' }}
          >
            {icon.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default CMS;

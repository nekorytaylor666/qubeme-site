import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <div style={{ padding: 20 }}>
        <svg width="148" height="48" viewBox="0 0 148 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.2069 0.299942H3.52949C1.58021 0.299942 0 1.88015 0 3.82943V43.0659C0 45.0152 1.58021 46.5954 3.52949 46.5954H46.968L38.9126 42.5309H3.99768V4.35271H43.7129V38.181L47.7364 45.8269V3.82943C47.7364 1.88015 46.1562 0.299942 44.2069 0.299942Z"
            fill="white"
          />
          <path
            d="M37.941 9.3297H9.79541V37.516L33.6677 37.5238L28.4135 32.269H15.1771L15.0881 14.624H32.8469L32.8253 27.8595L37.941 32.9773V9.3297Z"
            fill="#EFEFEF"
          />
          <path d="M37.941 9.3297H9.79541L15.0881 14.624H32.8469L37.941 9.3297Z" fill="white" />
          <path d="M33.7077 37.5658L9.79541 37.4776L15.1779 32.2716H28.4135L33.7077 37.5658Z" fill="white" />
          <path
            d="M61.4716 46.5956H65.4871V30.9473H61.4716V38.7715C61.4716 40.581 61.2304 41.7701 60.7478 42.3733C60.1791 43.0972 59.3002 43.4591 58.1455 43.4591C57.2666 43.4591 56.56 43.1833 56.043 42.6146C55.5259 42.0459 55.2674 40.874 55.2674 39.0989V30.9473H51.252V39.3574C51.252 42.0459 51.7517 43.7348 52.9753 45.0273C54.1645 46.3371 55.9913 47.1126 57.8353 47.1126C58.5591 47.1126 59.1795 47.0092 59.7138 46.8197C60.248 46.6301 60.834 46.2682 61.4716 45.7684V46.5956Z"
            fill="white"
          />
          <path
            d="M73.2596 46.5956V45.5961C74.5866 46.6129 75.9998 47.1126 77.4646 47.1126C79.5499 47.1126 81.3767 46.406 82.945 45.0101C84.7718 43.3729 85.6852 41.2876 85.6852 38.7542C85.6852 36.6 84.9786 34.7215 83.5654 33.1532C81.9282 31.3437 79.8946 30.4303 77.4646 30.4303C75.9998 30.4303 74.5866 30.9301 73.2596 31.9469V23.0714H69.2441V46.5956H73.2596ZM77.3095 34.0839C78.5504 34.0839 79.5672 34.4802 80.3599 35.2902C81.2044 36.1347 81.618 37.2893 81.618 38.7542C81.618 40.0123 81.3078 41.0463 80.6874 41.8563C79.8601 42.9248 78.7572 43.4591 77.3957 43.4591C76.2238 43.4591 75.2415 43.0454 74.4659 42.2355C73.656 41.3738 73.2423 40.2191 73.2423 38.7542C73.2423 37.5134 73.5526 36.4794 74.1557 35.6694C74.9485 34.6181 75.9998 34.0839 77.3095 34.0839Z"
            fill="white"
          />
          <path
            d="M103.091 40.2708C103.109 39.7538 103.109 39.3746 103.109 39.1506C103.109 36.5828 102.385 34.4975 100.937 32.8602C99.4895 31.2403 97.6282 30.4303 95.3361 30.4303C93.9402 30.4303 92.6304 30.7922 91.4241 31.4988C90.166 32.2398 89.1664 33.2911 88.4598 34.6353C87.7877 35.8934 87.443 37.2721 87.443 38.7542C87.443 40.9257 88.1152 42.8042 89.4594 44.3725C91.0104 46.1992 93.0268 47.1126 95.5085 47.1126C97.4904 47.1126 99.231 46.5267 100.713 45.3376C101.471 44.7344 102.247 43.7865 103.022 42.494L99.6101 41.0808C99.2482 41.6495 98.9725 42.0114 98.8174 42.1838C97.9729 43.0455 96.8527 43.4763 95.4912 43.4763C94.3193 43.4763 93.3542 43.0627 92.5787 42.2527C92.1479 41.7874 91.8032 41.1153 91.5792 40.2708H103.091ZM91.5792 37.2721C92.1134 35.1523 93.4576 33.9804 95.3361 33.9804C97.1457 33.9804 98.4038 35.0834 99.0931 37.2721H91.5792Z"
            fill="white"
          />
          <path
            d="M117.568 32.3088C116.31 31.0507 114.879 30.4303 113.311 30.4303C112.604 30.4303 112.001 30.5164 111.501 30.706C111.002 30.8956 110.467 31.2575 109.864 31.7745V30.9473H105.849V46.5956H109.864V38.7887C109.864 36.9619 110.088 35.7555 110.536 35.1524C111.071 34.4458 111.846 34.0839 112.897 34.0839C113.707 34.0839 114.345 34.3596 114.793 34.9111C115.276 35.497 115.517 36.6862 115.517 38.4612V46.5956H119.532V38.7887C119.532 36.9619 119.756 35.7555 120.205 35.1524C120.739 34.4458 121.514 34.0839 122.548 34.0839C123.341 34.0839 123.962 34.3596 124.41 34.9111C124.892 35.497 125.133 36.6862 125.133 38.4612V46.5956H129.149V38.1855C129.149 37.2032 129.08 36.3243 128.942 35.5487C128.753 34.5492 128.304 33.6185 127.598 32.7741C126.305 31.2058 124.548 30.4303 122.307 30.4303C120.463 30.4303 118.878 31.0507 117.568 32.3088Z"
            fill="white"
          />
          <path
            d="M147.555 40.2708C147.572 39.7538 147.572 39.3746 147.572 39.1506C147.572 36.5828 146.848 34.4975 145.4 32.8602C143.953 31.2403 142.092 30.4303 139.799 30.4303C138.404 30.4303 137.094 30.7922 135.887 31.4988C134.629 32.2398 133.63 33.2911 132.923 34.6353C132.251 35.8934 131.906 37.2721 131.906 38.7542C131.906 40.9257 132.578 42.8042 133.923 44.3725C135.474 46.1992 137.49 47.1126 139.972 47.1126C141.954 47.1126 143.694 46.5267 145.176 45.3376C145.935 44.7344 146.71 43.7865 147.486 42.494L144.073 41.0808C143.712 41.6495 143.436 42.0114 143.281 42.1838C142.436 43.0455 141.316 43.4763 139.955 43.4763C138.783 43.4763 137.818 43.0627 137.042 42.2527C136.611 41.7874 136.267 41.1153 136.042 40.2708H147.555ZM136.042 37.2721C136.577 35.1523 137.921 33.9804 139.799 33.9804C141.609 33.9804 142.867 35.0834 143.556 37.2721H136.042Z"
            fill="white"
          />
        </svg>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  min-height: 48px;
  background-color: purple;
  display: flex;
  justify-content: center;
  flex: 1;
  background: linear-gradient(95.06deg, #6550f7 0.24%, #6756dc 99.75%);
`;

export default Header;

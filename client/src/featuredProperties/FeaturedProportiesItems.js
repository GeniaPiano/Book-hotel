import styled from 'styled-components';

export const FeaturedPropWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const FeaturedPropItem = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
  `;

export const FeaturedPropImg = styled.img`
  width: 100%;
`;

export const FeaturedPropName = styled.span`
 font-weight: bold; 
`;

export const FeaturedPropCity = styled.span`
  font-weight: 300;
`;

export const FeaturedPropPrice = styled.span`
  font-weight: 700;
`;

export const FeaturedPropRating = styled.div`

  
`;

export const FeaturedPropBtn = styled.button`
  background-color: #003580;
  color: #fff;
  border: none;
  padding: 3px;
  margin-right:10px;
  font-weight: bold;
`;

export const FeaturedPropSpan = styled.span``;
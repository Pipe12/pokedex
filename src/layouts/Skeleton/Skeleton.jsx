import { StyledSkeleton } from './StyledSkeleton';

const Skeleton = ({ children }) => {
  return (
    <StyledSkeleton className='Skeleton App'>
      { children }
    </StyledSkeleton>
  )
}

export default Skeleton;

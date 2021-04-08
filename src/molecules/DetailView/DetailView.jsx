import { StyledDetailView } from './StyledDetailView';

const DetailView = ({ children }) => {
  return (
    <StyledDetailView className='DetailView'>
      { children }
    </StyledDetailView>
  )
}

export default DetailView;

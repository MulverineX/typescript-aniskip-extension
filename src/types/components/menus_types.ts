import { SkipTimeType } from '../api/skip_time_types';
import {
  SubmitMenuButtonOnClickHandler,
  SubmitMenuProps,
} from './submit_types';
import { VoteMenuButtonOnClickHandler, VoteMenuProps } from './vote_menu_types';

export interface MenusProps {
  submitMenuProps: SubmitMenuProps;
  voteMenuProps: VoteMenuProps;
}

export interface MenusButtonsProps {
  submitMenuButtonProps: {
    active: boolean;
    variant: string;
    onClick: SubmitMenuButtonOnClickHandler;
  };
  voteMenuButtonProps: {
    active: boolean;
    variant: string;
    onClick: VoteMenuButtonOnClickHandler;
  };
}

export interface MenusState {
  isSubmitMenuHidden: boolean;
  isVoteMenuHidden: boolean;
  skipTimes: SkipTimeType[];
}

export interface MenusButtonsState {
  isSubmitButtonActive: boolean;
  isVoteButtonActive: boolean;
}

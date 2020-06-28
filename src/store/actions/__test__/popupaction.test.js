// import { render } from '../../../utils';
import { dialogOpen, dialogClose } from '../PopUpAction';

describe('actions', () => {
  describe('DIALOGOPEN', () => {
    test('has the correct type', () => {
      const action = dialogOpen();
      expect(action.type).toEqual('DIALOG_OPEN');
    });

    test('DIALOGCLOSE', () => {
      const action = dialogClose();
      expect(action.type).toEqual('DIALOG_CLOSE');
    });
  });
});

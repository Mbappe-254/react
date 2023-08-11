import {COMMENTS} from '../../app/shared/COMMENTS';

export const selectCommmentsByCampsiteId = (campsiteId) => {

    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
};

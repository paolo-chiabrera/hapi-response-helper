import {badImplementation} from 'boom';

export default function responseHelper(err, res, callback) {
  if (err) {
    return callback(badImplementation(err));
  }

  callback(res);
}

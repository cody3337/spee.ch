import { all } from 'redux-saga/effects';
import { watchHandleShowPageUri, watchHandleShowHomepage } from './show_uri';
import { watchNewAssetRequest } from './show_asset';
import { watchNewChannelRequest, watchUpdateChannelClaims } from './show_channel';
import { watchFileIsRequested } from './file';
import { watchPublishStart } from './publish';
import { watchUpdateClaimAvailability } from './updateClaimAvailability';
import { watchUpdateChannelAvailability } from './updateChannelAvailability';
import { watchChannelCreate } from './createChannel';
import { watchChannelLoginCheck } from './checkForLoggedInChannel';
import { watchChannelLogout } from './logoutChannel';
import { watchAbandonClaim } from './abandon';

export function * rootSaga () {
  yield all([
    watchHandleShowPageUri(),
    watchHandleShowHomepage(),
    watchNewAssetRequest(),
    watchNewChannelRequest(),
    watchUpdateChannelClaims(),
    watchFileIsRequested(),
    watchPublishStart(),
    watchUpdateClaimAvailability(),
    watchUpdateChannelAvailability(),
    watchChannelCreate(),
    watchChannelLoginCheck(),
    watchChannelLogout(),
    watchAbandonClaim(),
  ]);
}

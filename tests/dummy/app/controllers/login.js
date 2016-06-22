import Ember from 'ember';

import OsfLoginControllerMixin from 'ember-osf/mixins/osf-login-controller';

import {
    getAuthUrl
} from 'ember-osf/utils/auth';

export default Ember.Controller.extend(OsfLoginControllerMixin, {
    toast: Ember.inject.service(),
    authUrl: getAuthUrl(),
    actions: {
        loginSuccess() {
            this.get('toast').success('Login success');
        },
        loginFail(/* err */) {
            this.get('toast').error('Login failed');
        }
    }
});

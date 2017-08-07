import DS from 'ember-data';
import OsfModel from 'ember-osf/models/osf-model';

export default OsfModel.extend({
    name: DS.attr('fixstring'),
    description: DS.attr('fixstring'),
    domain: DS.attr('string'),
    domainRedirectEnabled: DS.attr('boolean'),
    example: DS.attr('fixstring'),
    advisoryBoard: DS.attr('string'),
    emailSupport: DS.attr('fixstring'),
    subjectsAcceptable: DS.attr(),
    footerLinks: DS.attr('string'),
    allowSubmissions: DS.attr('boolean'),
    additionalProviders: DS.attr(),
    shareSource: DS.attr('string'),
    // Relationships
    taxonomies: DS.hasMany('taxonomy'),
    highlightedTaxonomies: DS.hasMany('taxonomy'),
    preprints: DS.hasMany('preprint', { inverse: 'provider', async: true }),
    licensesAcceptable: DS.hasMany('license', { inverse: null }),
});

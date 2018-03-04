const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');

const webpackMerge = require('webpack-merge');

const getAddons = (/* string | string[] */ addonsArg) => {
  const addons = (!addonsArg || typeof addonsArg === 'string' ? [addonsArg] : addonsArg).filter(Boolean);

  return addons.map(addonName =>
    require(`./build-utils/addons/webpack.${addonName}.js`),
  );
};

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  return webpackMerge(
    commonConfig,
    envConfig,
    ...getAddons(env.addons),
  );
};
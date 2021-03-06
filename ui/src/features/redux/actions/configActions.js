import * as Types from '../types/configTypes';

export const getConfig = () => (
    {type: Types.GET_CONFIG}
);

export const getConfigSuccess = (config) => (
    {type: Types.GET_CONFIG_SUCCESS, config}
);

export const getConfigDataMap = () => (
    {type: Types.GET_CONFIG_DATA_MAP}
);

export const getConfigDataMapSuccess = (config_data_map) => (
    {type: Types.GET_CONFIG_DATA_MAP_SUCCESS, config_data_map}
);

export const getConfigFailure = (error) => (
    {type: Types.GET_CONFIG_FAILURE, error}
);

export const updateConfigFailure = (error) => (
    {type: Types.UPDATE_CONFIG_FAILURE, error}
);

export const updateConfigSuccess = () => (
    {type: Types.UPDATE_CONFIG_SUCCESS}
);
export const cleanUpdateConfigSuccess = () => (
    {type: Types.CLEAN_UPDATE_CONFIG_SUCCESS}
);

export const processGetConfig = (state) => (
    {type: Types.PROCESSING_GET_CONFIG, state}
);

export const processUpdateConfig = (state) => (
    {type: Types.PROCESSING_UPDATE_CONFIG, state}
);

export const processGetConfigDataMap = (state) => (
    {type: Types.PROCESSING_GET_CONFIG_DATA_MAP, state}
);

export const updateConfig = (body) => (
    {type: Types.UPDATE_CONFIG, body}
);

export const clearUpdateConfigError = (state) => (
    {type: Types.CLEAR_ERROR_ON_UPDATE_CONFIG, state}
);

export const deleteConfigKey = (key) => (
    {type: Types.DELETE_CONFIG_KEY, key}
);

export const processDeleteConfigKey = (state) => (
    {type: Types.PROCESSING_DELETE_CONFIG_KEY, state}
);

export const deleteConfigKeyFailure = (error) => (
    {type: Types.DELETE_CONFIG_FAILURE, error}
);

export const cleanFinishedContainers = () => (
    {type: Types.CLEAN_FINISHED_CONTAINERS}
);


export const cleanFinishedContainersSuccess = (result) => (
    {type: Types.CLEAN_FINISHED_CONTAINERS_SUCCESS, result}
);

export const cleanFinishedContainersFailure = (error) => (
    {type: Types.CLEAN_FINISHED_CONTAINERS_FAILURE, error}
);



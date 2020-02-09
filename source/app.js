"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.application = void 0;var _configuration = _interopRequireDefault(require("../configuration"));
var _serviceDynamicContent = require("@service/serviceDynamicContent");





const application = async (
{} = {},
{

  memgraph = { host: 'localhost' } } =
{}) =>
{
  let serviceList = [];


  process.on('service', message => console.log(`☕ Service: ${message.serviceName}, host ${message.host}, port ${message.port}, status ${message.status}`));
  process.on('application', message => console.log(`✔ WebApp: status ${message.status} \n`));


  console.groupCollapsed('• Run services:');
  {
    let { service } = await _serviceDynamicContent.service.restApi.initializeAssetContentDelivery(
    {
      targetProjectConfig: _configuration.default,
      port: _configuration.default.apiGateway.service.find(item => item.targetService == 'contentDelivery').port },

    { memgraph });

    serviceList = [...serviceList, ...service];
  }
  {
    let { service } = await _serviceDynamicContent.service.restApi.initializeRootContentRendering(
    {
      targetProjectConfig: _configuration.default,
      port: _configuration.default.apiGateway.service.find(item => item.targetService == 'contentRendering').port },

    { memgraph });

    serviceList = [...serviceList, ...service];
  }












  console.groupEnd();

  process.emit('application', { status: 'ready' });

  if (process.send) process.send({ status: 'ready', description: 'All application services ready to receive requests' });

  return { config: _configuration.default, service: serviceList, externalService: { memgraph } };
};exports.application = application;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAuanMiXSwibmFtZXMiOlsiYXBwbGljYXRpb24iLCJtZW1ncmFwaCIsImhvc3QiLCJzZXJ2aWNlTGlzdCIsInByb2Nlc3MiLCJvbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2VydmljZU5hbWUiLCJwb3J0Iiwic3RhdHVzIiwiZ3JvdXBDb2xsYXBzZWQiLCJzZXJ2aWNlIiwic2VydmljZUR5bmFtaWNDb250ZW50IiwicmVzdEFwaSIsImluaXRpYWxpemVBc3NldENvbnRlbnREZWxpdmVyeSIsInRhcmdldFByb2plY3RDb25maWciLCJvd25Qcm9qZWN0Q29uZmlnIiwiYXBpR2F0ZXdheSIsImZpbmQiLCJpdGVtIiwidGFyZ2V0U2VydmljZSIsImluaXRpYWxpemVSb290Q29udGVudFJlbmRlcmluZyIsImdyb3VwRW5kIiwiZW1pdCIsInNlbmQiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImV4dGVybmFsU2VydmljZSJdLCJtYXBwaW5ncyI6IjZMQUFBO0FBQ0E7Ozs7OztBQU1PLE1BQU1BLFdBQVcsR0FBRztBQUN6QixLQUFLLEVBRG9CO0FBRXpCOztBQUVFQyxFQUFBQSxRQUFRLEdBQUcsRUFBRUMsSUFBSSxFQUFFLFdBQVIsRUFGYjtBQUdJLEVBTHFCO0FBTXRCO0FBQ0gsTUFBSUMsV0FBVyxHQUFHLEVBQWxCOzs7QUFHQUMsRUFBQUEsT0FBTyxDQUFDQyxFQUFSLENBQVcsU0FBWCxFQUFzQkMsT0FBTyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxjQUFhRixPQUFPLENBQUNHLFdBQVksVUFBU0gsT0FBTyxDQUFDSixJQUFLLFVBQVNJLE9BQU8sQ0FBQ0ksSUFBSyxZQUFXSixPQUFPLENBQUNLLE1BQU8sRUFBcEgsQ0FBakM7QUFDQVAsRUFBQUEsT0FBTyxDQUFDQyxFQUFSLENBQVcsYUFBWCxFQUEwQkMsT0FBTyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJGLE9BQU8sQ0FBQ0ssTUFBTyxLQUEvQyxDQUFyQzs7O0FBR0FKLEVBQUFBLE9BQU8sQ0FBQ0ssY0FBUixDQUF1QixpQkFBdkI7QUFDQTtBQUNFLFFBQUksRUFBRUMsT0FBRixLQUFjLE1BQU1DLCtCQUFzQkMsT0FBdEIsQ0FBOEJDLDhCQUE5QjtBQUN0QjtBQUNFQyxNQUFBQSxtQkFBbUIsRUFBRUMsc0JBRHZCO0FBRUVSLE1BQUFBLElBQUksRUFBRVEsdUJBQWlCQyxVQUFqQixDQUE0Qk4sT0FBNUIsQ0FBb0NPLElBQXBDLENBQXlDQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsYUFBTCxJQUFzQixpQkFBdkUsRUFBMEZaLElBRmxHLEVBRHNCOztBQUt0QixNQUFFVCxRQUFGLEVBTHNCLENBQXhCOztBQU9BRSxJQUFBQSxXQUFXLEdBQUcsQ0FBQyxHQUFHQSxXQUFKLEVBQWlCLEdBQUdVLE9BQXBCLENBQWQ7QUFDRDtBQUNEO0FBQ0UsUUFBSSxFQUFFQSxPQUFGLEtBQWMsTUFBTUMsK0JBQXNCQyxPQUF0QixDQUE4QlEsOEJBQTlCO0FBQ3RCO0FBQ0VOLE1BQUFBLG1CQUFtQixFQUFFQyxzQkFEdkI7QUFFRVIsTUFBQUEsSUFBSSxFQUFFUSx1QkFBaUJDLFVBQWpCLENBQTRCTixPQUE1QixDQUFvQ08sSUFBcEMsQ0FBeUNDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxhQUFMLElBQXNCLGtCQUF2RSxFQUEyRlosSUFGbkcsRUFEc0I7O0FBS3RCLE1BQUVULFFBQUYsRUFMc0IsQ0FBeEI7O0FBT0FFLElBQUFBLFdBQVcsR0FBRyxDQUFDLEdBQUdBLFdBQUosRUFBaUIsR0FBR1UsT0FBcEIsQ0FBZDtBQUNEOzs7Ozs7Ozs7Ozs7O0FBYUROLEVBQUFBLE9BQU8sQ0FBQ2lCLFFBQVI7O0FBRUFwQixFQUFBQSxPQUFPLENBQUNxQixJQUFSLENBQWEsYUFBYixFQUE0QixFQUFFZCxNQUFNLEVBQUUsT0FBVixFQUE1Qjs7QUFFQSxNQUFJUCxPQUFPLENBQUNzQixJQUFaLEVBQWtCdEIsT0FBTyxDQUFDc0IsSUFBUixDQUFhLEVBQUVmLE1BQU0sRUFBRSxPQUFWLEVBQW1CZ0IsV0FBVyxFQUFFLG9EQUFoQyxFQUFiOztBQUVsQixTQUFPLEVBQUVDLE1BQU0sRUFBRVYsc0JBQVYsRUFBNEJMLE9BQU8sRUFBRVYsV0FBckMsRUFBa0QwQixlQUFlLEVBQUUsRUFBRTVCLFFBQUYsRUFBbkUsRUFBUDtBQUNELENBdERNLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb3duUHJvamVjdENvbmZpZyBmcm9tICcuLi9jb25maWd1cmF0aW9uJ1xuaW1wb3J0IHsgc2VydmljZSBhcyBzZXJ2aWNlRHluYW1pY0NvbnRlbnQgfSBmcm9tICdAc2VydmljZS9zZXJ2aWNlRHluYW1pY0NvbnRlbnQnXG4vLyBpbXBvcnQgKiBhcyBzZXJ2aWNlQXBpRW5kcG9pbnQgZnJvbSAnQHNlcnZpY2Uvc2VydmljZUFwaUVuZHBvaW50J1xuLy8gaW1wb3J0ICogYXMgc2VydmljZUFjY2Vzc0NvbnRyb2wgZnJvbSAnQHNlcnZpY2Uvc2VydmljZUFjY2Vzc0NvbnRyb2wnXG4vLyBpbXBvcnQgKiBhcyBzZXJ2aWNlUmVhbHRpbWVFbmRwb2ludCBmcm9tICdAc2VydmljZS9zZXJ2aWNlUmVhbHRpbWVFbmRwb2ludCdcblxuLy8gaW5pdGlhbGl6ZSBzZXJ2aWNlc1xuZXhwb3J0IGNvbnN0IGFwcGxpY2F0aW9uID0gYXN5bmMgKFxuICB7fSA9IHt9LFxuICB7XG4gICAgLy8gZGVwZW5kZW5jeSBzZXJ2aWNlIGNvbmZpZ3NcbiAgICBtZW1ncmFwaCA9IHsgaG9zdDogJ2xvY2FsaG9zdCcgfSxcbiAgfSA9IHt9LFxuKSA9PiB7XG4gIGxldCBzZXJ2aWNlTGlzdCA9IFtdXG5cbiAgLy8gQXBwbGljYXRpb24gJiBTZXJ2aWNlIG1lc3NhZ2VzOlxuICBwcm9jZXNzLm9uKCdzZXJ2aWNlJywgbWVzc2FnZSA9PiBjb25zb2xlLmxvZyhg4piVIFNlcnZpY2U6ICR7bWVzc2FnZS5zZXJ2aWNlTmFtZX0sIGhvc3QgJHttZXNzYWdlLmhvc3R9LCBwb3J0ICR7bWVzc2FnZS5wb3J0fSwgc3RhdHVzICR7bWVzc2FnZS5zdGF0dXN9YCkpXG4gIHByb2Nlc3Mub24oJ2FwcGxpY2F0aW9uJywgbWVzc2FnZSA9PiBjb25zb2xlLmxvZyhg4pyUIFdlYkFwcDogc3RhdHVzICR7bWVzc2FnZS5zdGF0dXN9IFxcbmApKVxuXG4gIC8vIEVhY2ggc2VydmljZSBzaG91bGQgZW1pdCBhbiBldmVudC9tZXNzYWdlIHRvIGxpc3RlbmluZyBwcm9jZXNzZXMsIG1hcmtpbmcgYSByZWFkeSBzdGF0dXMgdG8gcmVjZWl2ZSByZXF1ZXN0cyAoaW4gY2FzZSBydW4gaW4gYSBmb3JrZWQgcHJvY2VzcykuXG4gIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ+KAoiBSdW4gc2VydmljZXM6JylcbiAge1xuICAgIGxldCB7IHNlcnZpY2UgfSA9IGF3YWl0IHNlcnZpY2VEeW5hbWljQ29udGVudC5yZXN0QXBpLmluaXRpYWxpemVBc3NldENvbnRlbnREZWxpdmVyeShcbiAgICAgIHtcbiAgICAgICAgdGFyZ2V0UHJvamVjdENvbmZpZzogb3duUHJvamVjdENvbmZpZyxcbiAgICAgICAgcG9ydDogb3duUHJvamVjdENvbmZpZy5hcGlHYXRld2F5LnNlcnZpY2UuZmluZChpdGVtID0+IGl0ZW0udGFyZ2V0U2VydmljZSA9PSAnY29udGVudERlbGl2ZXJ5JykucG9ydCxcbiAgICAgIH0sXG4gICAgICB7IG1lbWdyYXBoIH0sXG4gICAgKVxuICAgIHNlcnZpY2VMaXN0ID0gWy4uLnNlcnZpY2VMaXN0LCAuLi5zZXJ2aWNlXVxuICB9XG4gIHtcbiAgICBsZXQgeyBzZXJ2aWNlIH0gPSBhd2FpdCBzZXJ2aWNlRHluYW1pY0NvbnRlbnQucmVzdEFwaS5pbml0aWFsaXplUm9vdENvbnRlbnRSZW5kZXJpbmcoXG4gICAgICB7XG4gICAgICAgIHRhcmdldFByb2plY3RDb25maWc6IG93blByb2plY3RDb25maWcsXG4gICAgICAgIHBvcnQ6IG93blByb2plY3RDb25maWcuYXBpR2F0ZXdheS5zZXJ2aWNlLmZpbmQoaXRlbSA9PiBpdGVtLnRhcmdldFNlcnZpY2UgPT0gJ2NvbnRlbnRSZW5kZXJpbmcnKS5wb3J0LFxuICAgICAgfSxcbiAgICAgIHsgbWVtZ3JhcGggfSxcbiAgICApXG4gICAgc2VydmljZUxpc3QgPSBbLi4uc2VydmljZUxpc3QsIC4uLnNlcnZpY2VdXG4gIH1cblxuICAvLyBhd2FpdCBzZXJ2aWNlQXBpRW5kcG9pbnQuaW5pdGlhbGl6ZSh7XG4gIC8vICAgdGFyZ2V0UHJvamVjdENvbmZpZzogb3duUHJvamVjdENvbmZpZyxcbiAgLy8gICBwb3J0OiBvd25Qcm9qZWN0Q29uZmlnLmFwaUdhdGV3YXkuc2VydmljZS5maW5kKGl0ZW0gPT4gaXRlbS50YXJnZXRTZXJ2aWNlID09ICdhcGlFbmRwb2ludCcpLnBvcnQsXG4gIC8vIH0pXG5cbiAgLy8gYXdhaXQgc2VydmljZUFjY2Vzc0NvbnRyb2wub0F1dGguaW5pdGlhbGl6ZSh7IHRhcmdldFByb2plY3RDb25maWcgfSlcblxuICAvLyBhd2FpdCBzZXJ2aWNlQWNjZXNzQ29udHJvbC5vcGVuSWRDb25uZWN0LmluaXRpYWxpemUoeyB0YXJnZXRQcm9qZWN0Q29uZmlnIH0pXG5cbiAgLy8gYXdhaXQgc2VydmljZVJlYWx0aW1lRW5kcG9pbnQuaW5pdGlhbGl6ZVdTKHsgdGFyZ2V0UHJvamVjdENvbmZpZyB9KVxuXG4gIGNvbnNvbGUuZ3JvdXBFbmQoKVxuXG4gIHByb2Nlc3MuZW1pdCgnYXBwbGljYXRpb24nLCB7IHN0YXR1czogJ3JlYWR5JyB9KSAvLyBpbnRlcm5hbCBtZXNzYWdlXG4gIC8vIEV4dGVybmFsIG1lc3NhZ2UgLSBlbWl0IHJlYWR5IHN0YXR1cyB3aGVuIGFsbCBzZXJ2aWNlcyBhcmUgcmVhZHkgdG8gcmVjZWl2ZSByZXF1ZXN0cyAoaW4gY2FzZSBmb3JrZWQgcHJvY2VzcylcbiAgaWYgKHByb2Nlc3Muc2VuZCkgcHJvY2Vzcy5zZW5kKHsgc3RhdHVzOiAncmVhZHknLCBkZXNjcmlwdGlvbjogJ0FsbCBhcHBsaWNhdGlvbiBzZXJ2aWNlcyByZWFkeSB0byByZWNlaXZlIHJlcXVlc3RzJyB9KSAvLyBpZiBwcm9jZXNzIGlzIGEgZm9ya2VkIGNoaWxkIHByb2Nlc3MuXG5cbiAgcmV0dXJuIHsgY29uZmlnOiBvd25Qcm9qZWN0Q29uZmlnLCBzZXJ2aWNlOiBzZXJ2aWNlTGlzdCwgZXh0ZXJuYWxTZXJ2aWNlOiB7IG1lbWdyYXBoIH0gfSAvLyB0byBhbGxvdyBhY2Nlc3MgdG8gdGhlIGNvbmZpZ3VyYXRpb24gdXNlZCB0byBydW4gYXBwbGljYXRpb24gc2VydmljZXMgKHVzZWZ1bCBmb3IgdGVzdHMpXG59XG4iXX0=
// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westeurope';
  process.env['AZURE_SUBSCRIPTION_ID'] = '00000000-0000-0000-0000-000000000000';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/clusters/cluster?api-version=2018-03-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster\",\"name\":\"cluster\",\"type\":\"Microsoft.BatchAI/Clusters\",\"location\":\"westeurope\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"resizing\",\"creationTime\":\"2018-03-16T00:29:09.682Z\",\"allocationStateTransitionTime\":\"2018-03-16T00:29:09.682Z\",\"provisioningStateTransitionTime\":\"2018-03-16T00:29:10.2Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":1,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSSHPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"},\"nodeSetup\":{\"mountVolumes\":{\"azureFileShares\":[{\"accountName\":\"testacc3603\",\"azureFileUrl\":\"https://testacc3603.file.core.windows.net/azfileshare\",\"credentials\":{},\"relativeMountPath\":\"azfs\",\"fileMode\":\"0777\",\"directoryMode\":\"0777\"}]}}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1578',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:37:26 GMT',
  etag: '"0x8D58AD617681BD1"',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'request-id': '56ef2b38-1b50-485b-b040-bc2495abb6ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '01e1e0fa-7e50-41cc-84ab-8cb81039630b',
  'x-ms-correlation-request-id': '01e1e0fa-7e50-41cc-84ab-8cb81039630b',
  'x-ms-routing-request-id': 'WESTUS2:20180316T003726Z:01e1e0fa-7e50-41cc-84ab-8cb81039630b',
  date: 'Fri, 16 Mar 2018 00:37:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodeTestGroup4060/providers/Microsoft.BatchAI/clusters/cluster?api-version=2018-03-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/nodetestgroup4060/providers/Microsoft.BatchAI/clusters/cluster\",\"name\":\"cluster\",\"type\":\"Microsoft.BatchAI/Clusters\",\"location\":\"westeurope\",\"properties\":{\"provisioningState\":\"succeeded\",\"allocationState\":\"resizing\",\"creationTime\":\"2018-03-16T00:29:09.682Z\",\"allocationStateTransitionTime\":\"2018-03-16T00:29:09.682Z\",\"provisioningStateTransitionTime\":\"2018-03-16T00:29:10.2Z\",\"vmSize\":\"STANDARD_D1\",\"currentNodeCount\":0,\"nodeStateCounts\":{\"runningNodeCount\":0,\"idleNodeCount\":0,\"unusableNodeCount\":0,\"preparingNodeCount\":0,\"leavingNodeCount\":0},\"vmPriority\":\"dedicated\",\"scaleSettings\":{\"manual\":{\"targetNodeCount\":1,\"nodeDeallocationOption\":\"requeue\"}},\"virtualMachineConfiguration\":{\"imageReference\":{\"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"16.04-LTS\",\"version\":\"latest\"}},\"userAccountSettings\":{\"adminUserName\":\"username\",\"adminUserSSHPublicKey\":\"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDA/2AXum+BQkHvli+y9eG9kBd90X0kniEGPqR5AXo6zCty8iU+Bm8yOUqpkTIrx70S32nml35N8WBy+KVmgHOkUEItpK/b25Fuo8mBUDDIISRCKmcy+OUHdFQ6E1UWYEwrb01eLOVDeg2YsTp0xr5Rc6lgoItG6b7gTTXnyhY42B9X5ey5yAp3RwpUdWaZUdGAkZ4Yn9cnOmf+atH+St8LImeiYoAkhr0cPnDIrylguM+CfAmuFmbpIZfsR4alH8rGhMD19jHVNbBLABJuyZkQrUz5XG+M6dL3Wzze9wKnilmRfiCW+kXnJULQB35S8fVHkeTfJTph5uLkh0yrQ5Yj has_no_private_key\"},\"nodeSetup\":{\"mountVolumes\":{\"azureFileShares\":[{\"accountName\":\"testacc3603\",\"azureFileUrl\":\"https://testacc3603.file.core.windows.net/azfileshare\",\"credentials\":{},\"relativeMountPath\":\"azfs\",\"fileMode\":\"0777\",\"directoryMode\":\"0777\"}]}}}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1578',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Fri, 16 Mar 2018 00:37:26 GMT',
  etag: '"0x8D58AD617681BD1"',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'request-id': '56ef2b38-1b50-485b-b040-bc2495abb6ad',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '01e1e0fa-7e50-41cc-84ab-8cb81039630b',
  'x-ms-correlation-request-id': '01e1e0fa-7e50-41cc-84ab-8cb81039630b',
  'x-ms-routing-request-id': 'WESTUS2:20180316T003726Z:01e1e0fa-7e50-41cc-84ab-8cb81039630b',
  date: 'Fri, 16 Mar 2018 00:37:25 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return [,'testacc3603'];};
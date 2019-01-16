var reflex = require('ngv-jest-platform');
var _0 = require("..\\..\\..\\..\\..\\..\\sabre-ngv-app\\module.js");
var _1 = require("..\\..\\..\\..\\..\\..\\sabre-ngv-core\\module.js");
var _2 = require("..\\..\\..\\..\\..\\..\\sabre-ngv-xp\\module.js");
var _3 = require("..\\..\\..\\..\\..\\module.js");

var module = reflex.require("sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/Action");
reflex.initModule({"name":"sabre-tn-redapp-example-workflow-mod","version":"4.7.4","meta":{},"dependencies":["sabre-ngv-app","sabre-ngv-core","sabre-ngv-xp"],"submodules":["sabre-tn-redapp-example-workflow-mod/common/Consts","sabre-tn-redapp-example-workflow-mod/common/CustomXTPointService","sabre-tn-redapp-example-workflow-mod/common/ICustomXTPointService","sabre-tn-redapp-example-workflow-mod/common/WorkFlowListener","sabre-tn-redapp-example-workflow-mod/Context","sabre-tn-redapp-example-workflow-mod/index","sabre-tn-redapp-example-workflow-mod/Main","sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQ","sabre-tn-redapp-example-workflow-mod/models/CustomSvcRQData","sabre-tn-redapp-example-workflow-mod/models/CustomSvcRS","sabre-tn-redapp-example-workflow-mod/models/ICustomSvcRQ","sabre-tn-redapp-example-workflow-mod/models/ManualExtensionPointEventData","sabre-tn-redapp-example-workflow-mod/models/SampleResult","sabre-tn-redapp-example-workflow-mod/models/SampleResults","sabre-tn-redapp-example-workflow-mod/models/SearchFormRequest","sabre-tn-redapp-example-workflow-mod/models/SearchFormRequestData","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/Action","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/CmdHelperButton","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/reducers","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/sagas","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/State","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/types","sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsDrawerTile","sabre-tn-redapp-example-workflow-mod/views/decisionSupport/DsTilePopOver","sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsDrawerTile","sabre-tn-redapp-example-workflow-mod/views/lfsResults/LfsTilePopOver","sabre-tn-redapp-example-workflow-mod/views/modalDialog/ExtPointManualView","sabre-tn-redapp-example-workflow-mod/views/renderRS/REResultArea","sabre-tn-redapp-example-workflow-mod/views/renderRS/RSActionPopup","sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultPanel","sabre-tn-redapp-example-workflow-mod/views/renderRS/RSResultRow","sabre-tn-redapp-example-workflow-mod/views/cmdHelperForm/Form"],"hasTemplates":true,"hasStyles":true});

for( var i in module ) {
    if( module.hasOwnProperty(i) ) {
        exports[i] = module[i];
    }
}

import { Head, Tableofcontent } from "../home/Homepage";

export function Onboardingmobile(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <Head
                    h2={"ONBOARDING MOBILE SDK"}
                    p={"First implement Onboarding transaction callback at api partner end.,and then implement Mobile sdk"}
                    />
                    <div className="head my-4">
                        <p>SDK use Color Codes implemented in the partner App</p>
                        <p>SDK use Name implemented in the partner App</p>
                        <h5>DEMO CODE FOR INTERATION</h5>
                        <a href="/">https://docs.paysprint.in/matm/onboarding/UATSDK/OnBoardingdemoapp.zip</a>
                        <h5>UAT MOBILE SDK</h5>
                        <a href="/">https://docs.paysprint.in/matm/onboarding/UATSDK/onboard_uat_v2.0.aar</a>
                        <h5>UPDATED LIVE MOBILE SDK (VERSION - 1.0.11) WITH FIR-FMR</h5>
                        <a href="/">https://docs.paysprint.in/matm/onboarding/LIVE/onboardinglib_live.v-1.0.11.aar</a>
                        <h5>OLD LIVE MOBILE SDK (VERSION - 1.0.9)</h5>
                        <a href="/">https://docs.paysprint.in/matm/onboarding/LIVE/finalonboardinglib-release_v1_0_9.aar</a>
                        <div className="my-2">
                            <h5>DEPENDENCY</h5>
                            <p>In build.gradle(app level) add below code :</p>
                            <kbd className="my-2 kbd">
                                <p>multiDexEnabled true</p>
                                <p>//dependencies</p>
                                <p>implementation files('libs/onboard_uat_v1.0.aar')</p>
                                <p>implementation "com.squareup.retrofit2:retrofit:2.9.0"</p>
                                <p>implementation "com.squareup.retrofit2:adapter-rxjava2:2.3.0"</p>
                                <p>implementation "com.squareup.retrofit2:converter-gson:2.9.0"</p>
                                <p>implementation "io.reactivex.rxjava2:rxandroid:2.0.1"</p>
                                <p>implementation 'com.google.code.gson:gson:2.5.2'</p>
                                <p>implementation 'androidx.legacy:legacy-support-v4:1.0.0'</p>
                                <p>implementation "com.karumi:dexter:5.0.0"</p>
                                <p>implementation 'com.github.yalantis:ucrop:2.2.6-native'</p>
                            </kbd>
                            <p>In build.gradle add below code :</p>
                        </div>
                        <div className="my-2">
                            <h5>CALLING Intent</h5>
                            <kbd className="my-3 kbd">
                                <p>val intent = Intent(applicationContext, HostActivity::class.java)</p>
                                <p>intent.putExtra("pId", partnerId)</p>
                                <p>intent.putExtra("pApiKey", partnerKey)</p>
                                <p>intent.putExtra("mCode", "saura3") //merchant unique code and should not contain special character</p>
                                <p>intent.putExtra("mobile", "70429960") // merchant mobile no.</p>
                                <p>intent.putExtra("lat", "42.10")</p>
                                <p>intent.putExtra("lng", "76.00")</p>
                                <p>intent.putExtra("firm", "Test Telecom")</p>
                                <p>intent.putExtra("email", "sumiit.dash@gmail.com")</p>
                                <p>intent.addFlags(Intent.FLAG_ACTIVITY_NO_ANIMATION);</p>
                                <p>startActivityForResult(intent, 999)</p>
                            </kbd>
                        </div>
                        <div className="my-2">
                            <h5>RESULT INTENT</h5>
                            <p>override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) </p>
                            <p>super.onActivityResult(requestCode, resultCode, data)</p>
                            <p>if (requestCode == 999) </p>
                            <p>if (resultCode == Activity.RESULT_OK) </p>
                            <p>val status = data?.getBooleanExtra("status", false)</p>
                            <p>val response = data?.getIntExtra("response", 0)</p>
                            <p>val message = data?.getStringExtra("message")</p>
                            <kbd className="my-2 " >
                                val detailedResponse = "Status: $status,  " +<br/>
                                    "Response: $response, " +<br/>
                                    "Message: $message "<br/>
                                Toast.makeText(applicationContext, detailedResponse, Toast.LENGTH_LONG).show()<br/>
                                btnSubmit.snack(detailedResponse)<br/>
                                Log.i(logTag, detailedResponse)<br/>
                            </kbd>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Tableofcontent
                    a={"DEMO CODE FOR INTERATION"}
                    a1={"UAT MOBILE SDK"}
                    a2={"UPDATED LIVE MOBILE SDK (VERSION - 1.0.11) WITH FIR-FMR"}
                    a3={"OLD LIVE MOBILE SDK (VERSION - 1.0.9)"}
                    />
                </div>
                <div className="col-md-8">
                            <a className="left" href="/onboardingtransaction"><i className="fa-solid fa-arrow-left-long"></i>Onboarding Transaction Callback</a>
                            <a className="right" href="/onboardingstatuscheck">On Boarding Status Check For Pipe Wise<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}
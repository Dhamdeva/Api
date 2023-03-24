import { Head, Tableofcontent } from "../home/Homepage";

export function Encryptionbodytechnique(){
    return(
        <div className="container-fliud">
            <div className="row">
                <div className="col-md-7">
                    <Head
                    h2={"Encryption Body Technique"}
                    />
                    <div className="head my-4">
                        <h5>AEPS BODY ENCRYPTION TECHNIQUE</h5>
                        <p>In AEPS (Balance Enquiry, Mini Statement, Cash Withdraw, Aadhaar Pay,Cash Withdraw Transaction Status, Withdraw Three Way ) all body parameters should be encrypted using AES-128 encryption by</p>
                        <p>using AES-Key and AES-IV provided by Pay Sprint</p>
                        <div>
                            <h6><small>PHP</small></h6>
                            <pre>
                                <code>{"<?php"}<br/>
                                {"$key =''; (provided by PAYSPRINT)"}<br/>
                                {"$iv=   '';            (provided by PAYSPRINT)"}<br/>
                                {"$datapost = $this->input->post();(FORM POST DATA)"}<br/>
                                {"$cipher  =   openssl_encrypt(json_encode($datapost,true), 'AES-128-CBC', $key, $options=OPENSSL_RAW_DATA, $iv);"}<br/>
                                {"$body=       base64_encode($cipher);"}<br/>
                                {"?>"}<br/>
                                </code>
                            </pre>
                        </div>
                        <div>
                            <h6><small>C#</small></h6>
                            <pre className="code">
                                <code>
                            {" public class AES"}<br/>
                            {"    {"}<br/>
                            {"        public static string CryptAESIn(string textToCrypt, string crypt_key, string init_Vector)"}<br/>
                            {"        {"}<br/>
                            {"            try"}<br/>
                            {"            {"}<br/>
                            {"                byte[] cryptkey = Encoding.ASCII.GetBytes(crypt_key);"}<br/>
                            {"                byte[] initVector = Encoding.ASCII.GetBytes(init_Vector);"}<br/>
                            {"                using (var rijndaelManaged ="}<br/>
                            {"                    new RijndaelManaged { Key = cryptkey, IV = initVector, Mode = CipherMode.CBC })"}<br/>
                            {"                using (var memoryStream = new MemoryStream())"}<br/>
                            {"                using (var cryptoStream ="}<br/>
                            {"                    new CryptoStream(memoryStream,"}<br/>
                            {"                        rijndaelManaged.CreateEncryptor(cryptkey, initVector),"}<br/>
                            {"                        CryptoStreamMode.Write))"}<br/>
                            {"                {"}<br/>
                            {"                    using (var ws = new StreamWriter(cryptoStream))"}<br/>
                            {"                    {"}<br/>
                            {"                        ws.Write(textToCrypt);"}<br/>
                            {"                    }"}<br/>
                            {"                    return Convert.ToBase64String(memoryStream.ToArray());"}<br/>
                            {"                }"}<br/>
                            {"            }"}<br/>
                            {"            catch (CryptographicException e)"}<br/>
                            {"            {"}<br/>
                            {'                return "A Cryptographic error occurred: {0} " + e.Message;'}<br/>
                            {"            }"}<br/>
                            {"        }"}<br/>
                            {"        public static string DecryptAESIn(string cipherData, string crypt_key, string init_Vector)"}<br/>
                            {"        {"}<br/>
                            {"            try"}<br/>
                            {"            {"}<br/>
                            {"                byte[] cryptkey = Encoding.ASCII.GetBytes(crypt_key);"}<br/>
                            {"                byte[] initVector = Encoding.ASCII.GetBytes(init_Vector);"}<br/>
                            {"                using (var rijndaelManaged ="}<br/>
                            {"                    new RijndaelManaged { Key = cryptkey, IV = initVector, Mode = CipherMode.CBC })"}<br/>
                            {"                using (var memoryStream ="}<br/>
                            {"                    new MemoryStream(Convert.FromBase64String(cipherData)))"}<br/>
                            {"                using (var cryptoStream ="}<br/>
                            {"                    new CryptoStream(memoryStream,"}<br/>
                            {"                        rijndaelManaged.CreateDecryptor(cryptkey, initVector),"}<br/>
                            {"                        CryptoStreamMode.Read))"}<br/>
                            {"                {"}<br/>
                            {"                    return new StreamReader(cryptoStream).ReadToEnd();"}<br/>
                            {"                }"}<br/>
                            {"            }"}<br/>
                            {"            catch (CryptographicException e)"}<br/>
                            {"            {"}<br/>
                            {'                return "A Cryptographic error occurred: {0} " + e.Message;'}<br/>
                            {"            }"}<br/>
                            {"        }"}<br/>
                            {"        public static string EncryptTestWa(string plainText, string crypt_key, string init_Vector)"}<br/>
                            {"        {"}<br/>
                            {"            byte[] Key = Encoding.ASCII.GetBytes(crypt_key);"}<br/>
                            {"            byte[] IV = Encoding.ASCII.GetBytes(init_Vector);"}<br/>
                            {"            byte[] encrypted;"}<br/>
                            {"            // Create a new AesManaged.    "}<br/>
                            {"            using (AesManaged aes = new AesManaged())"}<br/>
                            {"            {"}<br/>
                            {"                // Create encryptor    "}<br/>
                            {"                ICryptoTransform encryptor = aes.CreateEncryptor(Key, IV);"}<br/>
                            {"                // Create MemoryStream    "}<br/>
                            {"                using (MemoryStream ms = new MemoryStream())"}<br/>
                            {"                {"}<br/>
                            {"                    // Create crypto stream using the CryptoStream class. This class is the key to encryption    "}<br/>
                            {"                    // and encrypts and decrypts data from any given stream. In this case, we will pass a memory stream    "}<br/>
                            {"                    // to encrypt    "}<br/>
                            {"                    using (CryptoStream cs = new CryptoStream(ms, encryptor, CryptoStreamMode.Write))"}<br/>
                            {"                    {"}<br/>
                            {"                        // Create StreamWriter and write data to a stream    "}<br/>
                            {"                        using (StreamWriter sw = new StreamWriter(cs))"}<br/>
                            {"                            sw.Write(plainText);"}<br/>
                            {"                        encrypted = ms.ToArray();"}<br/>
                            {"                    }"}<br/>
                            {"                }"}<br/>
                            {"            }"}<br/>
                            {"            // Return encrypted data    "}<br/>
                            {"            return Convert.ToBase64String(encrypted);"}<br/>
                            {"        }"}<br/>
                            {"        public static string DecryptTestWa(string cipher_Text, string crypt_key, string init_Vector)"}<br/>
                            {"        {"}<br/>
                            {"            byte[] cipherText = Encoding.ASCII.GetBytes(cipher_Text);"}<br/>
                            {"            byte[] Key = Encoding.ASCII.GetBytes(crypt_key);"}<br/>
                            {"            byte[] IV = Encoding.ASCII.GetBytes(init_Vector);"}<br/>
                            {"            string plaintext = null;"}<br/>
                            {"            // Create AesManaged    "}<br/>
                            {"            using (AesManaged aes = new AesManaged())"}<br/>
                            {"            {"}<br/>
                            {"                // Create a decryptor    "}<br/>
                            {"                ICryptoTransform decryptor = aes.CreateDecryptor(Key, IV);"}<br/>
                            {"                // Create the streams used for decryption.    "}<br/>
                            {"                using (MemoryStream ms = new MemoryStream(cipherText))"}<br/>
                            {"                {"}<br/>
                            {"                    // Create crypto stream    "}<br/>
                            {"                    using (CryptoStream cs = new CryptoStream(ms, decryptor, CryptoStreamMode.Read))"}<br/>
                            {"                    {"}<br/>
                            {"                        // Read crypto stream    "}<br/>
                            {"                        using (StreamReader reader = new StreamReader(cs))"}<br/>
                            {"                            plaintext = reader.ReadToEnd();"}<br/>
                            {"                    }"}<br/>
                            {"                }"}<br/>
                            {"            }"}<br/>
                            {"            return plaintext;"}<br/>
                            {"        }"}<br/>
                            {"        public static string EncryptStringToBytesAes(string plainText, string key_k, string iv_v, Int32 KeySize = 256)"}<br/>
                            {"        {"}<br/>
                            {"            Int32 blockSize = 128;"}<br/>
                            {"            byte[] key = Encoding.ASCII.GetBytes(key_k);"}<br/>
                            {"            byte[] iv = Encoding.ASCII.GetBytes(iv_v);"}<br/>
{""}<br/>
                            {"            // Check arguments."}<br/>
                            {"            if (plainText == null || plainText.Length <= 0)"}<br/>
                            {'                throw new ArgumentNullException("plainText");'}<br/>
                            {"            if (key == null || key.Length <= 0)"}<br/>
                            {'                throw new ArgumentNullException("key");'}<br/>
                            {"            if (iv == null || iv.Length <= 0)"}<br/>
                            {'                throw new ArgumentNullException("iv");'}<br/>
{""}<br/>
                            {"            // Declare the stream used to encrypt to an in memory"}<br/>
                            {"            // array of bytes."}<br/>
                            {"            MemoryStream msEncrypt;"}<br/>
{""}<br/>
                            {"            // Declare the RijndaelManaged object"}<br/>
                            {"            // used to encrypt the data."}<br/>
                            {"            RijndaelManaged aesAlg = null;"}<br/>
{""}<br/>
                            {"            try"}<br/>
                            {"            {"}<br/>
                            {"                // Create a RijndaelManaged object"}<br/>
                            {"                // with the specified key and IV."}<br/>
                            {"                aesAlg = new RijndaelManaged { Mode = CipherMode.CBC, KeySize = KeySize, BlockSize = blockSize, Key = key, IV = iv };"}<br/>
{""}<br/>
                            {"                // Create an encryptor to perform the stream transform."}<br/>
                            {"                ICryptoTransform encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);"}<br/>
{""}<br/>
                            {"                // Create the streams used for encryption."}<br/>
                            {"                msEncrypt = new MemoryStream();"}<br/>
                            {"                using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))"}<br/>
                            {"                {"}<br/>
                            {"                    using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))"}<br/>
                            {"                    {"}<br/>
{""}<br/>
                            {"                        //Write all data to the stream."}<br/>
                            {"                        swEncrypt.Write(plainText);"}<br/>
                            {"                        swEncrypt.Flush();"}<br/>
                            {"                        swEncrypt.Close();"}<br/>
                            {"                    }"}<br/>
                            {"                }"}<br/>
                            {"            }"}<br/>
                            {"            finally"}<br/>
                            {"            {"}<br/>
                            {"                // Clear the RijndaelManaged object."}<br/>
                            {"                if (aesAlg != null)"}<br/>
                            {"                    aesAlg.Clear();"}<br/>
                            {"            }"}<br/>
                            {"            // Return the encrypted bytes from the memory stream."}<br/>
                            {"            return Convert.ToBase64String(msEncrypt.ToArray());"}<br/>
                            {"        }"}<br/>
                            {"        public static string DecryptStringFromBytesAes(string cipherText_c, string key_k, string iv_v, Int32 KeySize = 256)"}<br/>
                            {"        {"}<br/>
                            {"            Int32 blockSize = 128;"}<br/>
                            {"            byte[] cipherText = Encoding.ASCII.GetBytes(cipherText_c);"}<br/>
                            {"            byte[] key = Encoding.ASCII.GetBytes(key_k);"}<br/>
                            {"            byte[] iv = Encoding.ASCII.GetBytes(iv_v);"}<br/>
{""}<br/>
                            {"            // Check arguments."}<br/>
                            {"            if (cipherText == null || cipherText.Length <= 0)"}<br/>
                            {'            throw new ArgumentNullException("cipherText");'}<br/>
                            {"                if (key == null || key.Length <= 0)"}<br/>
                            {'            throw new ArgumentNullException("key");'}<br/>
                            {"                if (iv == null || iv.Length <= 0)"}<br/>
                            {'                throw new ArgumentNullException("iv");'}<br/>
                            {"            "}<br/>
                            {"                // Declare the RijndaelManaged object"}<br/>
                            {"            // used to decrypt the data."}<br/>
                            {"                RijndaelManaged aesAlg = null;"}<br/>
                            {"        "}<br/>
                            {"            // Declare the string used to hold"}<br/>
                            {"            // the decrypted text."}<br/>
                            {"            string plaintext;"}<br/>
{""}<br/>
                            {"            try"}<br/>
                            {"            {"}<br/>
                            {"                // Create a RijndaelManaged object"}<br/>
                            {"                // with the specified key and IV."}<br/>
                            {"                aesAlg = new RijndaelManaged { Mode = CipherMode.CBC, KeySize = KeySize, BlockSize = blockSize, Key = key, IV = iv };"}<br />
{""}<br />
                            {"                // Create a decrytor to perform the stream transform."}<br />
                            {"                ICryptoTransform decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);"}<br />
                            {"                // Create the streams used for decryption."}<br />
                            {"                using (MemoryStream msDecrypt = new MemoryStream(cipherText))"}<br />
                            {"                {"}<br />
                            {"                    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))"}<br />
                            {"                    {"}<br />
                            {"                        using (StreamReader srDecrypt = new StreamReader(csDecrypt))"}<br />
                            {"                        {"}<br />
                            {"                            // Read the decrypted bytes from the decrypting stream"}<br />
                            {"                            // and place them in a string."}<br />
                            {"                            plaintext = srDecrypt.ReadToEnd();"}<br />
                            {"                            srDecrypt.Close();"}<br />
                            {"                            }"}<br />
                            {"                        }"}<br />
                            {"                    }"}<br />
                            {"                }"}<br />
                            {"            finally"}<br />
                            {"            {"}<br />
                            {"                // Clear the RijndaelManaged object."}<br />
                            {"                if (aesAlg != null)"}<br />
                            {"                aesAlg.Clear();"}<br />
                            {"                    }"}<br />
                            {"            return plaintext;"}<br />
                            {"            }"}<br />
                            {"    }"}<br />
                               </code>
                            </pre>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <Tableofcontent
                    a={"AEPS BODY ENCRYPTION TECHNIQUE"}
                    />
                </div>
                <div className="col-md-7">
                            <a className="left" href="/aepsrdservice"><i className="fa-solid fa-arrow-left-long"></i>RD Service</a>
                            <a className="right" href="/aepsenquiry">Enquiry<i className="fa-solid fa-arrow-right-long"></i></a> 
                </div>
            </div>
        </div>
    )
}
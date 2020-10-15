package src.java;

public class AddTwoNumbers {
	
	private final Thread rxThreadd;
    private final TCPConnectionListener eventListener;
    private final BufferedReader in;
	
	private int abr;
	
	public static void main (String[] args) {
		
		double a = 3;
		int b = 4, c;
		
		c = Math.sqrt (a* a + b* b);
		
		System.out.println ("c = "+ c);
	}

   public TCPConnection(final TCPConnectionListener eventListener, Socket socket) throws IOException {
        this.eventListener = eventListener;
		this.socket = socket; 
        in = new BufferedReader(new InputStreamReader(socket.getInputStream(), StandardCharsets.UTF_8));
        out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream(), StandardCharsets.UTF_8));
        rxThread = new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    eventListener.onConnectionReady(TCPConnection.this);
                    while (!rxThread.isInterrupted()) {
                        eventListener.onReceiveString(TCPConnection.this, in.readLine());
                    }
                } catch (IOException e) {
                    eventListener.onException(TCPConnection.this, e);
                } finally {
                    eventListener.onDisconnect(TCPConnection.this);
                }
            }
        });
        rxThread.start();
		rxThread.start();
    }
	
}
package com.sleekbyte.tailor.functional;

import com.sleekbyte.tailor.common.Messages;
import com.sleekbyte.tailor.common.Rules;
import com.sleekbyte.tailor.common.Severity;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

/**
 * Functional tests for lower camel case rule.
 */
@RunWith(MockitoJUnitRunner.class)
public class LowerCamelCaseTest extends RuleTest {
	
	int a = 11;

    @Override
    protected String[] getCommandArgs() {
        return new String[]{ "--only=lower-camel-case" };
    }

    @Override
    protected void addAllExpectedMsgs() {
        addExpectedMsg(7, 5, Severity.WARNING, Messages.VARIABLE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(8, 5, Severity.WARNING, Messages.VARIABLE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(16, 14, Severity.WARNING, Messages.VARIABLE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(20,22, Severity.WARNING, Messages.VARIABLE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(26, 8, Severity.WARNING, Messages.VARIABLE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(163, 8, Severity.WARNING, Messages.ENUM_CASE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(164, 8, Severity.WARNING, Messages.ENUM_CASE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(165, 8, Severity.WARNING, Messages.ENUM_CASE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(176, 10, Severity.WARNING, Messages.ENUM_CASE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(177, 10, Severity.WARNING, Messages.ENUM_CASE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(190, 10, Severity.WARNING, Messages.ENUM_CASE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
        addExpectedMsg(200, 10, Severity.WARNING, Messages.VARIABLE + Messages.NAMES + Messages.LOWER_CAMEL_CASE);
    }

    private void addExpectedMsg(int line, int column) {
        this.expectedMessages.add(Printer.genOutputStringForTest(Rules.LOWER_CAMEL_CASE, inputFile.getName(), line,
            column, priority, msg));
    }

}
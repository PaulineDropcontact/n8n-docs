---
permalink: /nodes/n8n-nodes-base.actionNetwork
description: Learn how to use the Action Network node in n8n
---

# Action Network

[Action Network](https://actionnetwork.org/) is an open platform that empowers individuals and groups to organize for progressive causes.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/ActionNetwork/README.md).
:::

## Basic operations

<Resource node="n8n-nodes-base.actionNetwork" />

## Example

This workflow allows you to create a new event in Action Network, then create a new person and mark them as having attended your event. This workflow uses the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [ActiveCampaign]()

The final workflow should look like the following image.

![A workflow with the Action Network node](./workflow.png)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Action Network node

1. First enter your credentials. You can find out how to do that [here](../../../credentials/ActionNetwork/README.md).
2. Fill in the remaining parameters as follows:
    * **Resource**: Select **Event** from the dropdown list.
    * **Operation**: Select **Create** from the dropdown list.
    * **Origin System**: Enter where this event originated. n8n.io in our example.
    * **Title**: Enter the name of your event, July Meetup in our example here.
3. Enable the **Simple** toggle to return an easier to view response as opposed to the complete raw data.
4. Use the **Additional Fields** to enter any further details about your event. Here we provided the Start Date.

![Action Network node](./action_network_node.png)

### 3. Action Network1 node

1. First enter your credentials. You can find out how to do that [here](../../../credentials/ActionNetwork/README.md).
2. Fill in the remaining parameters as follows:
    * **Resource**: Select **Person** from the dropdown list.
    * **Operation**: Select **Create** from the dropdown list.
3. Enable the **Simple** toggle to return an easier to view response as opposed to the complete raw data.
4. In the **Email Address** section, enter the address and status for this person (here we Subscribe them).
5. Use the **Additional Fields** to enter any further details about this person. Here we provided their given name.

![Action Network1 node](./action_network_node1.png)

### 4. Action Network2 node

1. First enter your credentials. You can find out how to do that [here](../../../credentials/ActionNetwork/README.md).
2. Fill in the remaining parameters as follows:
    * **Resource**: Select **Attendance** from the dropdown list.
    * **Operation**: Select **Create** from the dropdown list.
    * **Person ID**: Enter the ID for the person created by the previous node.
    * **Event ID**: Enter the ID for the event created in the first node.
3. Enable the **Simple** toggle to return an easier to view response as opposed to the complete raw data.

![Action Network2 node](./action_network_node2.png)
